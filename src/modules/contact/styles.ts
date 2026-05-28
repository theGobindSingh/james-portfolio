import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const contactMainWrapperStyles = css`
  padding: calc(var(--header-height) + 1.25rem) 0 4rem;
  position: relative;
  z-index: 1;

  ${mediaQuery.nonDesktop} {
    padding: calc(var(--header-height) + 0.8rem) 0 3rem;
  }
`;

export const ContactPageRoot = styled.div`
  min-height: 100svh;
  color: var(--color-text-900);
  background:
    radial-gradient(
      circle at 84% 14%,
      rgb(255 255 255 / 58%) 0%,
      rgb(255 255 255 / 0%) 44%
    ),
    radial-gradient(
      circle at 12% 72%,
      rgb(126 118 108 / 16%) 0%,
      rgb(126 118 108 / 0%) 42%
    ),
    var(--color-primary-100);
`;

export const ContactHero = styled.section`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 2.5rem;
  margin-bottom: 2rem;

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
    max-width: 12ch;
    line-height: 0.92;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    font-size: clamp(2.6rem, 7.8vw, 6.8rem);
  }

  .intro {
    margin: 0;
    color: var(--color-text-700);
    font-size: var(--fs-2xs);
    line-height: 1.65;
    margin-bottom: 1rem;
    max-width: 46ch;
  }

  .response-note {
    margin: 0;
    color: var(--color-text-600);
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: var(--fs-5xs);
    max-width: 52ch;
    line-height: 1.5;
  }

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;
    gap: 1rem;

    .title {
      max-width: 15ch;
      font-size: clamp(2.1rem, 12.5vw, 3.8rem);
    }

    .intro {
      font-size: var(--fs-3xs);
      margin-bottom: 0.8rem;
    }

    .response-note {
      font-size: var(--fs-5xs);
    }
  }
`;

export const ContactPanels = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1.25rem;

  .card {
    border: 1px solid rgb(82 77 71 / 24%);
    border-radius: 1.1rem;
    padding: 1.2rem;
    background: linear-gradient(
      150deg,
      rgb(255 255 255 / 84%) 0%,
      rgb(255 255 255 / 42%) 100%
    );
    display: flex;
    flex-direction: column;
  }

  .card-title {
    margin: 0;
    margin-bottom: 0.7rem;
    font-size: var(--fs-l);
    line-height: 1.06;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }

  .card-description {
    margin: 0;
    color: var(--color-text-700);
    font-size: var(--fs-3xs);
    line-height: 1.55;
    margin-bottom: 1rem;
    max-width: 42ch;
  }

  .email-button {
    margin-top: auto;
  }

  .point-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.65rem;

    li {
      margin: 0;
      position: relative;
      padding-left: 1.1rem;
      font-size: var(--fs-4xs);
      color: var(--color-text-800);
      line-height: 1.45;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.5em;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background: var(--color-text-500);
      }
    }
  }

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;

    .card {
      padding: 1rem;
      border-radius: 0.95rem;
    }

    .card-title {
      font-size: var(--fs-m);
    }

    .card-description {
      font-size: var(--fs-4xs);
      margin-bottom: 0.8rem;
    }

    .point-list li {
      font-size: var(--fs-5xs);
    }
  }
`;

export const ContactSocialRow = styled.section`
  border-top: 1px solid rgb(82 77 71 / 25%);
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  .label {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-family: var(--font-mono);
    font-size: var(--fs-5xs);
    color: var(--color-text-600);
  }

  .social-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 0.65rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2rem;
    padding: 0 0.85rem;
    border-radius: 999px;
    border: 1px solid rgb(82 77 71 / 25%);
    text-decoration: none;
    color: var(--color-text-900);
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: var(--fs-5xs);
    transition:
      transform 200ms ease,
      background-color 200ms ease,
      border-color 200ms ease;

    &:hover {
      transform: translateY(-0.1rem);
      border-color: rgb(82 77 71 / 45%);
      background-color: rgb(255 255 255 / 64%);
    }
  }

  ${mediaQuery.nonDesktop} {
    flex-direction: column;
    align-items: flex-start;

    .social-list {
      justify-content: flex-start;
      gap: 0.55rem;
    }
  }
`;
