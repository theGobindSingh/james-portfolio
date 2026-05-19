import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import { forwardRef } from 'react';

const BlackSectionWithoutRef = () => {
  return (
    <CommonFullWidthWrapper
      wrapperCss={
        {
          backgroundColor: 'rgba(8,8,7)',
          color: 'var(--color-text-100)',
          // position: 'relative',
          // zIndex: 2,
          marginTop: 'calc(100svh - var(--header-height))',
          zIndex: 1,
          position: 'relative',
          isolation: 'isolate',
        } as any
      }
      css={{
        padding: '2rem 0',
      }}
    >
      <div css={{ height: '150vh' }}>helo</div>
    </CommonFullWidthWrapper>
  );
};

const BlackSection = forwardRef(BlackSectionWithoutRef);
export default BlackSection;
