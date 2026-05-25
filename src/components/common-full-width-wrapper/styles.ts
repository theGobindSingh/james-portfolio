import { css } from '@emotion/react';
import { mediaQuery } from '@styles/global';

export const containerSize = '95%';
export const mobileContainerSize = '90%';

export const wrapperStyles = css`
  width: ${mobileContainerSize};
  max-width: 100vw;
  overflow-x: hidden;
  ${mediaQuery.desktop} {
    width: ${containerSize};
  }
`;
