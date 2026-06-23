import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const essaysPreviewSectionWrapperStyles = css`
  /* background-color: #ffffff; */
  color: var(--color-text-900);
  position: relative;
  z-index: 1;
`;

export const EssaysPreviewContent = styled.div`
  border-top: 1px solid var(--color-text-300);
  padding: 4rem 0;

  .title {
    margin: 0;
    margin-bottom: 0.65rem;
    font-size: var(--fs-3xl);
    line-height: 0.95;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    max-width: 14ch;
  }

  .subtitle {
    margin: 0;
    color: var(--color-text-600);
    font-size: var(--fs-1xs);
    line-height: 1.5;
    max-width: 56ch;
    margin-bottom: 2rem;
  }

  ${mediaQuery.nonDesktop} {
    padding: 3rem 0;

    .title {
      font-size: var(--fs-1xl);
      margin-bottom: 0.5rem;
    }

    .subtitle {
      margin-bottom: 1rem;
      font-size: var(--fs-2xs);
    }
  }
`;

export const EssaysPreviewList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  .item {
    border-top: 1px solid var(--color-text-500);
    padding-top: 1rem;
  }

  .item-title {
    margin: 0;
    margin-bottom: 0.85rem;
    font-size: var(--fs-s);
    line-height: 1.2;
  }

  .item-description {
    margin: 0;
    color: var(--color-text-700);
    line-height: 1.45;
    font-size: var(--fs-2xs);
    margin-bottom: 0.9rem;
  }

  .item-note {
    margin: 0;
    font-size: var(--fs-3xs);
    color: var(--color-text-600);
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;

    .item {
      padding-top: 0.75rem;
    }

    .item-title {
      font-size: var(--fs-1xs);
      margin-bottom: 0.5rem;
    }

    .item-description {
      font-size: var(--fs-3xs);
      margin-bottom: 0.6rem;
    }

    .item-note {
      font-size: var(--fs-4xs);
    }
  }
`;
