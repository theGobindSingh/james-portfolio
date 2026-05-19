import CommonFullWidthWrapper from '@components/v2/common-full-width-wrapper';
import { forwardRef } from 'react';

const BlackSectionWithoutRef = () => {
  const a = 0;
  return (
    <CommonFullWidthWrapper
      wrapperCss={
        {
          backgroundColor: 'rgba(8,8,7)',
          color: 'var(--color-text-100)',
          position: 'relative',
          zIndex: 2,
        } as any
      }
    >
      <div css={{ height: '150vh' }}>helo</div>
    </CommonFullWidthWrapper>
  );
};

const BlackSection = forwardRef(BlackSectionWithoutRef);
export default BlackSection;
