import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

const cardReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const workMainWrapperStyles = css`
  padding: calc(var(--header-height) + 1.25rem) 0 4.25rem;
  position: relative;
  z-index: 1;

  ${mediaQuery.nonDesktop} {
    padding: calc(var(--header-height) + 0.8rem) 0 3rem;
  }
`;

export const WorkPageRoot = styled.div`
  min-height: 100svh;
  color: var(--color-text-900);
  background:
    radial-gradient(
      circle at 8% 12%,
      rgb(255 255 255 / 62%) 0%,
      rgb(255 255 255 / 0%) 36%
    ),
    radial-gradient(
      circle at 90% 7%,
      rgb(126 118 108 / 18%) 0%,
      rgb(126 118 108 / 0%) 42%
    ),
    var(--color-primary-100);
`;

export const WorkHero = styled.section`
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 2.5rem;
  margin-bottom: 2.4rem;

  .eyebrow {
    margin: 0;
    margin-bottom: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-family: var(--font-mono);
    color: var(--color-text-600);
    font-size: var(--fs-4xs);
  }

  .title {
    margin: 0;
    font-family: var(--font-special-one);
    font-size: clamp(2.8rem, 8.6vw, 8.2rem);
    line-height: 0.9;
    text-transform: uppercase;
    max-width: 11ch;
    letter-spacing: 0.01em;
  }

  .intro {
    margin: 0;
    margin-top: 1rem;
    color: var(--color-text-700);
    line-height: 1.58;
    font-size: var(--fs-2xs);
    max-width: 58ch;
  }

  .process-card {
    align-self: end;
    border: 1px solid rgb(82 77 71 / 23%);
    border-radius: 1.05rem;
    background: linear-gradient(
      165deg,
      rgb(255 255 255 / 70%) 0%,
      rgb(162 158 154 / 14%) 100%
    );
    padding: 1.15rem;
  }

  .process-title {
    margin: 0;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    font-size: var(--fs-4xs);
    letter-spacing: 0.08em;
    font-family: var(--font-mono);
    color: var(--color-text-700);
  }

  .process-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.75rem;

    li {
      margin: 0;
      padding-left: 1rem;
      position: relative;
      color: var(--color-text-800);
      font-size: var(--fs-3xs);
      line-height: 1.45;

      &::before {
        content: '';
        width: 0.42rem;
        height: 0.42rem;
        border-radius: 50%;
        background-color: var(--color-text-500);
        position: absolute;
        top: 0.55em;
        left: 0;
      }
    }
  }

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-bottom: 1.65rem;

    .title {
      font-size: clamp(2.25rem, 14vw, 4rem);
      max-width: 12ch;
    }

    .intro {
      max-width: none;
      font-size: var(--fs-3xs);
    }

    .process-card {
      padding: 0.95rem;
      border-radius: 0.85rem;
    }

    .process-list {
      li {
        font-size: var(--fs-4xs);
      }
    }
  }
`;

export const WorkCaseStudyGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  .card {
    border: 1px solid rgb(82 77 71 / 26%);
    border-radius: 1.2rem;
    padding: 1.2rem;
    background: linear-gradient(
      145deg,
      rgb(255 255 255 / 84%) 0%,
      rgb(255 255 255 / 40%) 100%
    );
    display: flex;
    flex-direction: column;
    min-height: 22.5rem;
    animation: ${cardReveal} 440ms ease-out both;
    transition:
      transform 240ms ease,
      box-shadow 240ms ease,
      border-color 240ms ease;

    &:hover {
      transform: translateY(-0.3rem);
      border-color: rgb(82 77 71 / 40%);
      box-shadow: 0 18px 34px rgb(19 19 17 / 8%);
    }

    &:nth-of-type(2) {
      animation-delay: 70ms;
    }

    &:nth-of-type(3) {
      animation-delay: 140ms;
    }

    &:nth-of-type(4) {
      animation-delay: 210ms;
    }
  }

  .card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    margin-bottom: 0.95rem;
  }

  .index {
    margin: 0;
    font-family: var(--font-mono);
    font-size: var(--fs-4xs);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text-600);
  }

  .category {
    margin: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    padding: 0.35rem 0.65rem;
    border: 1px solid rgb(82 77 71 / 25%);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-family: var(--font-mono);
    font-size: var(--fs-5xs);
    color: var(--color-text-700);
    text-align: center;
  }

  .title {
    margin: 0;
    margin-bottom: 0.55rem;
    font-size: var(--fs-l);
    line-height: 1.08;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }

  .timeline {
    margin: 0;
    margin-bottom: 0.8rem;
    font-size: var(--fs-4xs);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-text-600);
    font-family: var(--font-mono);
  }

  .summary {
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--fs-3xs);
    line-height: 1.55;
    color: var(--color-text-700);
  }

  .focus-list {
    margin: 0;
    margin-bottom: 1rem;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;

    li {
      margin: 0;
      border: 1px solid rgb(82 77 71 / 20%);
      border-radius: 999px;
      padding: 0.25rem 0.55rem;
      font-size: var(--fs-5xs);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--color-text-700);
      font-family: var(--font-mono);
    }
  }

  .outcome {
    margin: 0;
    font-size: var(--fs-4xs);
    line-height: 1.5;
    color: var(--color-text-800);
  }

  .metric-grid {
    margin: 1rem 0 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;

    .metric {
      border-top: 1px solid rgb(82 77 71 / 22%);
      padding-top: 0.5rem;
    }

    .value {
      display: block;
      margin: 0;
      margin-bottom: 0.2rem;
      font-size: var(--fs-s);
      line-height: 1;
      font-weight: 600;
      color: var(--color-text-900);
    }

    .label {
      display: block;
      margin: 0;
      font-family: var(--font-mono);
      font-size: var(--fs-5xs);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--color-text-600);
    }
  }

  .request-link {
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    width: fit-content;
    font-family: var(--font-mono);
    font-size: var(--fs-5xs);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    text-decoration: none;
    color: var(--color-text-900);
    border-bottom: 1px solid transparent;
    padding-bottom: 0.2rem;
    transition:
      opacity 200ms ease,
      border-color 200ms ease;

    &:hover {
      opacity: 0.6;
      border-color: var(--color-text-500);
    }
  }

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;

    .card {
      min-height: auto;
      padding: 1rem;
      border-radius: 1rem;
    }

    .title {
      font-size: var(--fs-m);
    }

    .summary,
    .outcome {
      font-size: var(--fs-4xs);
    }

    .metric-grid {
      gap: 0.5rem;

      .value {
        font-size: var(--fs-2xs);
      }
    }
  }
`;

export const WorkDetailNote = styled.p`
  margin: 1.1rem 0 0;
  color: var(--color-text-600);
  font-size: var(--fs-4xs);
  line-height: 1.45;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const WorkCtaStrip = styled.section`
  margin-top: 2.2rem;
  border-radius: 1rem;
  border: 1px solid rgb(82 77 71 / 30%);
  padding: 1.35rem;
  background: linear-gradient(
    120deg,
    rgb(82 77 71 / 94%) 0%,
    rgb(57 54 50 / 96%) 100%
  );
  color: var(--color-primary-100);
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: flex-end;

  .title {
    margin: 0;
    margin-bottom: 0.45rem;
    font-size: var(--fs-xl);
    line-height: 1.05;
    letter-spacing: -0.01em;
    max-width: 30ch;
  }

  .description {
    margin: 0;
    color: rgb(236 234 227 / 78%);
    font-size: var(--fs-4xs);
    line-height: 1.6;
    max-width: 48ch;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 0;
  }

  .action-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    min-height: 2.45rem;
    padding: 0 1rem;
    border: 1px solid rgb(236 234 227 / 45%);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-family: var(--font-mono);
    font-size: var(--fs-5xs);
    color: var(--color-primary-100);
    transition:
      transform 220ms ease,
      background-color 220ms ease,
      color 220ms ease;

    &:hover {
      transform: translateY(-0.14rem);
      background-color: var(--color-primary-100);
      color: var(--color-text-900);
    }

    &.secondary {
      border-style: dashed;
    }
  }

  ${mediaQuery.nonDesktop} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;

    .title {
      font-size: var(--fs-s);
      max-width: 24ch;
    }

    .description {
      font-size: var(--fs-5xs);
      max-width: none;
    }

    .actions {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.6rem;
    }

    .action-link {
      width: 100%;
      min-height: 2.25rem;
      justify-content: flex-start;
      font-size: var(--fs-5xs);
    }
  }
`;
