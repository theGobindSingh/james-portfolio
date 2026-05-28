import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const expertiseSectionWrapperStyles = css`
  background-color: #ffffff;
  color: var(--color-text-900);
  position: relative;
  z-index: 1;
`;

export const ExpertiseContent = styled.div`
  border-top: 1px solid var(--color-text-300);
  padding: 4rem 0;

  .label {
    margin: 0;
    margin-bottom: 0.75rem;
    font-size: var(--fs-3xs);
    font-family: var(--font-mono);
    text-transform: uppercase;
    color: var(--color-text-600);
    letter-spacing: 0.08em;
  }

  .title {
    margin: 0;
    max-width: 28ch;
    font-size: var(--fs-1xl);
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 2rem;
  }
`;

export const ExpertiseList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  .item {
    border: 1px solid var(--color-text-300);
    border-radius: 999px;
    font-size: var(--fs-3xs);
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-700);
    padding: 0.65rem 1rem;
    background: linear-gradient(
      120deg,
      rgb(255 255 255 / 98%) 0%,
      rgb(221 221 213 / 45%) 100%
    );
  }

  ${mediaQuery.nonDesktop} {
    gap: 0.5rem;
    .item {
      font-size: var(--fs-4xs);
      padding: 0.55rem 0.75rem;
    }
  }
`;
