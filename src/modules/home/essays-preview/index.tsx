import DefaultSection from '@/layouts/default-section';
import { essaysPreviewData } from '@data';
import { EssaysPreviewList } from '@modules/home/essays-preview/styles';

const EssaysPreview = () => {
  const { title, subtitle, items } = essaysPreviewData;

  return (
    <DefaultSection title={title} subtitle={subtitle}>
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
    </DefaultSection>
  );
};

export default EssaysPreview;
