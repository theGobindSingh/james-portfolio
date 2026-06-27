import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const contactSectionWrapperStyles = css`
  background-color: var(--color-text-900);
  color: var(--color-text-100);
  position: relative;
  z-index: 1;
`;

export const ContactContent = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  & > div {
    width: 60%;
    flex-shrink: 0;
  }

  .title {
    margin: 0;
    font-size: var(--fs-4xl);
    line-height: 0.95;
    letter-spacing: 0.05em;
  }

  .description {
    margin: 0;
    color: var(--color-text-300);
    font-size: var(--fs-1xs);
    line-height: 1.6;
    max-width: 40ch;
    margin-bottom: 1.5rem;
  }

  .email-button {
    font-size: var(--fs-2xs);
    background-color: var(--color-text-100);
    color: var(--color-text-900);
  }

  .social-list {
    margin: 0;
    margin-top: 2rem;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .social-link {
    color: var(--color-text-200);
    text-decoration: none;
    font-family: var(--font-mono);
    font-size: var(--fs-3xs);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: var(--color-text-200);
    }
  }

  ${mediaQuery.nonDesktop} {
    padding: 3rem 0;
    grid-template-columns: 1fr;
    gap: 1.25rem;

    .title {
      font-size: var(--fs-3xl);
    }

    .description {
      font-size: var(--fs-2xs);
      margin-bottom: 1rem;
    }

    .social-list {
      margin-top: 1.5rem;
      gap: 0.75rem;
    }

    .social-link {
      font-size: var(--fs-4xs);
    }
  }
`;
