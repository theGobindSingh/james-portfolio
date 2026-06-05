import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const homeHeroWrapperStyles = css`
  position: fixed;
  transform-origin: bottom;
  height: calc(100svh - var(--header-height));
  justify-content: flex-end;
  flex-direction: column;
`;

export const homeHeroContainerStyles = css`
  height: 100%;
  display: grid;
  padding: 0 !important;
  padding-bottom: 0;
  /* padding-bottom: 3rem; */
  margin-bottom: 0;
  grid-template-columns: 1fr 0.6fr 0.4fr;
  grid-template-rows: 1fr 0.5fr 0.5fr 1fr;

  margin-bottom: 1rem;

  --_pencil-line-width: 3px;

  ${mediaQuery.nonDesktop} {
    row-gap: 1rem;
    grid-template-columns: 0.15fr 0.6fr 0.25fr;
    grid-template-rows: 0.75fr 1.25fr;

    --_pencil-line-width: 2px;
  }
`;

export const HomeImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  transform: translateX(calc(var(--_pencil-line-width) / 2));
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 21%;
    height: 100%;
    border-top: var(--_pencil-line-width) solid var(--color-text-300);
  }

  ${mediaQuery.nonDesktop} {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    width: auto;
    transform: translateX(0);
    &::before {
      border-top: 0px solid transparent;
      border-right: var(--_pencil-line-width) solid var(--color-text-300);
      border-bottom: var(--_pencil-line-width) solid var(--color-text-300);
      border-bottom-right-radius: 1rem;
      top: 50vh;
      height: 30px;
      width: calc(
        (100% + 5vw / 2) + (5vw / 2) - (var(--_pencil-line-width) * 1.5)
      );
      transform: translateX(calc(-50% + 5vw / 2));
    }
  }
`;

export const homeHeroImgStyles = css`
  height: 100%;
  width: 100%;
  object-fit: contain;
  transform: translate(-20%, calc(-50% + var(--_pencil-line-width) / 2));
  /* filter: grayscale(100%); */
  /* mix-blend-mode: darken; */
  ${mediaQuery.desktop} {
    &.mobile {
      display: none;
    }
  }

  ${mediaQuery.nonDesktop} {
    &.desktop {
      display: none;
    }
    object-position: center bottom;
    transform: translate(0, 0);
    height: 50vh;
    width: 100%;
  }
`;

export const HomeHeroTitle = styled.h1`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  font-size: clamp(6.875rem, 10.85vw, 14.575rem);
  font-weight: 700;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  margin: 0;
  margin-left: -0.04em;
  overflow: hidden;
  /* 
   * custom media queries because display text
   */
  @media (max-width: 1180px) {
    font-size: clamp(6.875rem, 12.2vw, 9rem);
  }
  ${mediaQuery.nonDesktop} {
    font-size: var(--fs-4xl);
    line-height: 0.8em;
    max-width: 7ch;
    align-self: flex-end;
    grid-column: 2 / -1;
    grid-row: 1 / 2;
    /* margin-bottom: 0.25em; */
  }

  & > * {
    display: block;
    height: fit-content;
    transition: all 0.3s ease;
  }
  .space {
    width: 0.25em;
  }
  .moved-up {
    transform: translateY(-100%);
    opacity: 0;
  }
  .moved-down {
    opacity: 0;
    transform: translateY(100%);
  }
`;

export const HomeHeroContentWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / -1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-right: 10%;
  position: relative;
  ${mediaQuery.nonDesktop} {
    grid-column: 2 / 3;
    grid-row: 2 / -1;
    padding-right: 0;
    gap: 0.75rem;
  }
`;

export const HomeHeroLineBox = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 2 / 5;
  position: relative;
  .box {
    position: absolute;
    width: 100%;
    border: var(--_pencil-line-width) solid var(--color-text-300);
    border-top-right-radius: 0.25rem;
    border-left-color: transparent;
    top: 0;
    left: 0;
    &._1 {
      height: 50%;
      border-bottom-right-radius: 4rem;
      .icon {
        bottom: 0;
        left: 0;
        transform: translate(-50%, calc(50% + var(--_pencil-line-width) / 2));
      }
    }
    &._2 {
      height: 85%;
      border-bottom-color: transparent;
      .icon {
        bottom: 0;
        right: 0;
        transform: rotate(-90deg)
          translate(-50%, calc(50% + var(--_pencil-line-width) / 2));
      }
    }
    .icon {
      position: absolute;
      color: var(--color-text-300);
      font-size: 2rem;
    }
  }
  ${mediaQuery.nonDesktop} {
    display: none;
    grid-column: unset;
    grid-row: unset;
  }
`;

export const HomeHeroTextWrapper = styled.div`
  margin: 0;
  grid-row: 3 / 4;
  font-size: var(--fs-m);
  color: var(--color-text-600);
  font-weight: 500;
  overflow: hidden;
  .greeting {
    display: block;
    color: var(--color-text-700);
    font-weight: 600;
    margin-bottom: 0.5em;
    width: fit-content;
  }
  & > .text {
    margin: 0;
    margin-bottom: 1.25em;
    font-size: var(--fs-m);
  }
  .button {
  }
  ${mediaQuery.nonDesktop} {
    & > .text {
      font-size: var(--fs-1xs);
    }
    grid-row: 2 / 3;
    grid-column: 1 / -1;
  }
  & > * {
    transition: all 0.5s ease;
  }
  .moved {
    transform: translateX(-100%);
  }
`;

export const homeHeroArrowStyles = css`
  font-size: 1.5rem;
  /* grid-column: 1 / 2;
  grid-row: 2 / 3; */
  color: var(--color-text-500);
  ${mediaQuery.nonDesktop} {
    font-size: var(--fs-1xs);
  }
`;

export const HomeHeroDateTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  grid-column: 3 / 4;
  grid-row: 4 / 5;
  height: 100%;
  width: 100%;
  padding-left: var(--fs-m);
  .text {
    font-family: var(--font-mono);
    font-size: var(--fs-2xs);
    text-transform: uppercase;
    /* max-width: min(calc(100% - 1rem), 25ch); */
    font-weight: 500;
    color: var(--color-text-600);
  }
  .date {
    font-size: var(--fs-4xl);
    font-weight: 600;
  }
  ${mediaQuery.nonDesktop} {
    grid-row: 2 / -1;
    grid-column: 3 / -1;
    height: 100%;
    width: 100%;
    padding-left: 10%;
    .text {
      font-size: var(--fs-4xs);
      margin-bottom: 0.5em;
    }
    .date {
      line-height: 0.8em;
      font-size: var(--fs-1xl);
    }
  }
`;
