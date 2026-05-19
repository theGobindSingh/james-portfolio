import CommonFullWidthWrapper from '@components/v2/common-full-width-wrapper';
import { forwardRef } from 'react';

const BlackSectionEndWithoutRef = () => {
  const a = 0;
  return (
    <CommonFullWidthWrapper
      wrapperCss={
        {
          position: 'absolute',
          bottom: '0',
          zIndex: 1,
        } as any
      }
    >
      <div
        css={{
          height: '37.5vh',
          width: '100%',
        }}
      >
        hello
      </div>
    </CommonFullWidthWrapper>
  );
};

const BlackSectionEnd = forwardRef(BlackSectionEndWithoutRef);
export default BlackSectionEnd;
