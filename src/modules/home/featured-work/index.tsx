import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import LinkText from '@components/link-text';
import { featuredWorkData } from '@data';
import {
  FeaturedWorkContent,
  FeaturedWorkGrid,
  featuredWorkSectionWrapperStyles,
} from '@modules/home/featured-work/styles';

const FeaturedWork = () => {
  const { title, subtitle, items, ctaText, ctaTargetClassName } =
    featuredWorkData;

  const ctaClickHandler = () => {
    const target = document.querySelector(`.${ctaTargetClassName}`);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <CommonFullWidthWrapper
      element="section"
      wrapperCss={featuredWorkSectionWrapperStyles}
    >
      <FeaturedWorkContent>
        <div className="header">
          <div>
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </div>
          <LinkText text={ctaText} onClick={ctaClickHandler} className="cta" />
        </div>
        <FeaturedWorkGrid>
          {items.map((item) => {
            return (
              <article key={item.title} className="card">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <p className="card-note">{item.note}</p>
              </article>
            );
          })}
        </FeaturedWorkGrid>
      </FeaturedWorkContent>
    </CommonFullWidthWrapper>
  );
};

export default FeaturedWork;
