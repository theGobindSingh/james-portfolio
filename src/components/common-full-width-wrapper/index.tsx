import {
  containerSize,
  wrapperStyles,
} from '@components/common-full-width-wrapper/styles';
import {
  FullWidthWrapper,
  FullWidthWrapperProps,
} from '@kami-ui/react-components';
import { forwardRef, Ref } from 'react';

const CommonFullWidthWrapperWithoutRef = (
  { children, ...props }: FullWidthWrapperProps,
  ref: Ref<HTMLElement>,
) => {
  return (
    <FullWidthWrapper
      containerSize={containerSize}
      css={wrapperStyles}
      ref={ref}
      {...props}
    >
      {children}
    </FullWidthWrapper>
  );
};
const CommonFullWidthWrapper = forwardRef(CommonFullWidthWrapperWithoutRef);
export default CommonFullWidthWrapper;
