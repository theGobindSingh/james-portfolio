import DefaultSection from '@/layouts/default-section';
import img from '@assets/images/car.jpg';
import { featuredWorkData } from '@data';
import { FeaturedWorkGrid } from '@modules/home/featured-work/styles';
import Image from 'next/image';

const FeaturedWork = () => {
  const { title, subtitle, items, ctaText } = featuredWorkData;

  // const ctaClickHandler = () => {
  //   const target = document.querySelector(`.${ctaTargetClassName}`);
  //   target?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <DefaultSection
      title={title}
      subtitle={subtitle}
      ctaText={ctaText}
      css={{
        paddingTop: '10rem',
      }}
    >
      <FeaturedWorkGrid>
        {items.map((item) => {
          return (
            <div key={item.title} className="card-wrapper">
              <article className="card">
                <Image src={img} alt="" />
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.note}</p>
              </article>
            </div>
          );
        })}
      </FeaturedWorkGrid>
    </DefaultSection>
  );
};

export default FeaturedWork;
