import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const aboutSectionWrapperStyles = css`
  background-color: #ffffff;
  color: var(--color-text-900);
  position: relative;
  z-index: 1;
`;

export const AboutContent = styled.div`
  border-top: 1px solid var(--color-text-300);
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 2rem;

  .label {
    margin: 0;
    font-family: var(--font-mono);
    font-size: var(--fs-3xs);
    text-transform: uppercase;
    color: var(--color-text-600);
    letter-spacing: 0.08em;
    margin-bottom: 0.8rem;
  }

  .title {
    margin: 0;
    max-width: 10ch;
    line-height: 0.95;
    font-size: var(--fs-4xl);
    letter-spacing: -0.03em;
    text-transform: uppercase;
  }

  .intro,
  .detail {
    margin: 0;
    font-size: var(--fs-1xs);
    line-height: 1.6;
    color: var(--color-text-700);
  }

  .detail {
    margin-top: 1rem;
  }

  .principles {
    margin: 1.5rem 0 1.75rem;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.65rem;

    li {
      margin: 0;
      font-size: var(--fs-2xs);
      line-height: 1.45;
      color: var(--color-text-800);
      padding-left: 1.25rem;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0.6em;
        left: 0;
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 50%;
        background-color: var(--color-text-500);
      }
    }
  }

  .resume-button {
    font-size: var(--fs-2xs);
  }

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 3rem 0;

    .title {
      font-size: var(--fs-3xl);
      max-width: 12ch;
    }

    .intro,
    .detail {
      font-size: var(--fs-2xs);
    }

    .principles {
      margin: 1rem 0 1.5rem;
      li {
        font-size: var(--fs-3xs);
      }
    }
  }
`;
