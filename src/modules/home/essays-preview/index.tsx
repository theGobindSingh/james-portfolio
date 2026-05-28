import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import { essaysPreviewData } from '@data';
import {
  EssaysPreviewContent,
  EssaysPreviewList,
  essaysPreviewSectionWrapperStyles,
} from '@modules/home/essays-preview/styles';

const EssaysPreview = () => {
  const { title, subtitle, items } = essaysPreviewData;

  return (
    <CommonFullWidthWrapper
      element="section"
      wrapperCss={essaysPreviewSectionWrapperStyles}
    >
      <EssaysPreviewContent>
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <EssaysPreviewList>
          {items.map((item) => {
            return (
              <article className="item" key={item.title}>
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>
                <p className="item-note">{item.note}</p>
              </article>
            );
          })}
        </EssaysPreviewList>
      </EssaysPreviewContent>
    </CommonFullWidthWrapper>
  );
};

export default EssaysPreview;
