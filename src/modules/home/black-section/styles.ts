import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const blackSectionWrapperStyles = css`
  background-color: #ffffff;
  color: var(--color-text-900);
  z-index: 1;
  position: relative;
  isolation: isolate;
`;

export const BlackSectionWrapper = styled(CommonFullWidthWrapper)`
  padding: 4.5rem 0;
`;

export const LiveByDesignWrapper = styled.div`
  margin-bottom: 5rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 3rem;

  .desc {
    width: min(42%, 36ch);
    margin: 0;
    color: var(--color-text-700);
    font-size: var(--fs-1xs);
    line-height: 1.6;
  }

  ${mediaQuery.nonDesktop} {
    margin-bottom: 5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

    .desc {
      width: 100%;
      font-size: var(--fs-2xs);
    }
  }
`;
