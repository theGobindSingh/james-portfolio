import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const blackSectionWrapperStyles = css`
  /* background-color: rgba(8, 8, 7); */
  background-color: #ffffff;
  color: var(--color-text-900);
  /* margin-top: calc(100svh - var(--header-height)); */
  z-index: 1;
  position: relative;
  isolation: isolate;
`;

export const BlackSectionWrapper = styled(CommonFullWidthWrapper)`
  padding: 5rem 0;
`;

export const LiveByDesignWrapper = styled.div`
  margin-bottom: 50vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;

  .desc {
    width: 40%;
  }
`;
