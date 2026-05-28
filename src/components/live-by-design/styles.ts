import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const LiveByDesignWrapper = styled.div`
  width: min(540px, 100%);
  max-width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: clamp(5.25rem, 9vw, 7rem);
  line-height: 0.83em;
  font-family: var(--font-special-one);
  position: relative;

  * {
    font-size: inherit;
    line-height: inherit;
  }

  .title-box {
    margin: 0;
    display: flex;
    flex-direction: column;

    .title-lower {
      margin-left: 1.58em;
    }

    .char-container {
      position: relative;
      height: 0.75em;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      overflow: hidden;
      .char {
        transition: transform 0.3s ease;
        &.bottom {
          user-select: none;
        }
      }
      &:hover,
      &.active {
        .char {
          transform: translateY(-100%);
        }
      }
    }
  }

  .dots-container {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(100%, -0.1em);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    width: fit-content;
    height: fit-content;

    .dot {
      background-color: grey;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      &.blue {
        background-color: #00bef1;
      }
      &.pink {
        background-color: #e466a5;
      }
      &.yellow {
        background-color: #e5cd57;
      }
      &.white {
        background-color: var(--color-text-900);
      }
    }
  }

  ${mediaQuery.nonDesktop} {
    width: fit-content;
    max-width: 100%;
    justify-content: flex-start;
    align-items: flex-end;
    font-size: clamp(3.35rem, 18vw, 5rem);
    line-height: 0.88em;

    .title-box {
      .title-lower {
        margin-left: 1.35em;
      }
    }

    .dots-container {
      transform: translate(92%, -0.02em);
      gap: 0.35rem;

      .dot {
        width: 13px;
        height: 13px;
      }
    }
  }

  ${mediaQuery.phone} {
    font-size: clamp(2.85rem, 18vw, 4rem);

    .dots-container {
      bottom: 0.11em;
      transform: translate(calc(100% + 0.2rem), 0);
      gap: 0.32rem;

      .dot {
        width: 11px;
        height: 11px;
      }
    }
  }
`;
