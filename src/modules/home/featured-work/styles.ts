import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const featuredWorkSectionWrapperStyles = css`
  background-color: #ffffff;
  color: var(--color-text-900);
  position: relative;
  z-index: 1;
`;

export const FeaturedWorkContent = styled.div`
  padding: 0 0 4.5rem;

  .header {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    align-items: flex-end;
    margin-bottom: 2rem;
  }

  .title {
    margin: 0;
    font-size: var(--fs-4xl);
    line-height: 0.95;
    text-transform: uppercase;
    letter-spacing: -0.02em;
  }

  .subtitle {
    margin: 0;
    max-width: 42ch;
    color: var(--color-text-600);
    font-size: var(--fs-1xs);
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  .cta {
    font-family: var(--font-mono);
    font-size: var(--fs-3xs);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-text-700);
    flex-shrink: 0;
    margin-bottom: 0.4rem;
  }

  ${mediaQuery.nonDesktop} {
    .header {
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 1.25rem;
      gap: 0.65rem;
    }

    .title {
      font-size: var(--fs-3xl);
    }

    .subtitle {
      margin-bottom: 0;
      font-size: var(--fs-2xs);
    }

    .cta {
      font-size: var(--fs-4xs);
      margin-bottom: 0;
    }
  }
`;

export const FeaturedWorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  .card {
    border: 1px solid var(--color-text-300);
    border-radius: 1.25rem;
    padding: 1.2rem;
    background: linear-gradient(
      140deg,
      rgb(255 255 255 / 96%) 0%,
      rgb(209 209 199 / 25%) 100%
    );
    min-height: 17.5rem;
    display: flex;
    flex-direction: column;
  }

  .card-title {
    margin: 0;
    margin-bottom: 0.9rem;
    font-size: var(--fs-m);
    line-height: 1.1;
    text-transform: uppercase;
  }

  .card-description {
    margin: 0;
    color: var(--color-text-700);
    line-height: 1.5;
    font-size: var(--fs-2xs);
    margin-bottom: 1rem;
  }

  .card-note {
    margin: auto 0 0;
    font-family: var(--font-mono);
    font-size: var(--fs-3xs);
    color: var(--color-text-600);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;

    .card {
      min-height: auto;
      border-radius: 1rem;
      padding: 1rem;
    }

    .card-title {
      font-size: var(--fs-s);
    }

    .card-description {
      font-size: var(--fs-3xs);
    }

    .card-note {
      font-size: var(--fs-4xs);
      margin-top: 1rem;
    }
  }
`;
