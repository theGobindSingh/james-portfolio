import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const featuredWorkSectionWrapperStyles = css`
  /* background-color: hsl(34, 12%, 90%); */
  color: var(--color-text-900);
  position: relative;
  z-index: 1;
  padding-top: 10rem;
`;

export const FeaturedWorkContent = styled.div`
  padding: 0 0 4.5rem;

  .header {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    align-items: flex-end;
    margin-bottom: 2rem;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .title {
    margin: 0;
    font-size: var(--fs-4xl);
    line-height: 0.95;
    letter-spacing: 0.05em;
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  row-gap: 3rem;
  padding: 0 12.5%;

  .card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    width: 100%;
    text-align: center;
    &:nth-of-type(1),
    &:nth-of-type(2) {
      grid-column: 1 / span 2;
      /* padding: 0 12.5%; */
    }
  }

  .card {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      border-radius: 1.25rem;
      overflow: hidden;
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      opacity: 0.85;
    }
  }

  .card-title {
    margin: 0;
    font-size: var(--fs-1xl);
    line-height: 1.1;
    letter-spacing: 0.07em;
    font-family: var(--font-display);
  }

  .card-desc {
    text-transform: uppercase;
    font-size: var(--fs-2xs);
    margin: 0;
  }

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;

    .card {
      min-height: 14rem;
      border-radius: 1rem;
    }

    .card-image {
      min-height: 14rem;
    }

    .card-title {
      font-size: var(--fs-s);
    }
  }
`;
