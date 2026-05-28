import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const homeFooterWrapperStyles = css`
  background-color: var(--color-text-900);
  color: var(--color-text-100);
  position: relative;
  z-index: 1;
`;

export const HomeFooterContent = styled.footer`
  border-top: 1px solid rgb(255 255 255 / 18%);
  padding: 1.4rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .copyright,
  .tagline {
    margin: 0;
    font-family: var(--font-mono);
    font-size: var(--fs-4xs);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-text-300);
  }

  ${mediaQuery.nonDesktop} {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem 0 1.75rem;

    .copyright,
    .tagline {
      font-size: 0.62rem;
    }
  }
`;
