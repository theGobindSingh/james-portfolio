import styled from '@emotion/styled';
import { mediaQuery } from '@styles/global';

export const LiveByDesignWrapper = styled.div`
  .title-box {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    --_char-padding: 2px;
    font-family: var(--font-special-one);
    font-size: calc(var(--fs-4xl) + var(--fs-2xl));
    font-size: 10vw;
    text-transform: uppercase;
    text-box: trim-both cap text;

    * {
      text-box: inherit;
    }
    ${mediaQuery.nonDesktop} {
      font-size: 22.5vw;
    }
  }
`;

export const TitleRow = styled.div`
  display: flex;
  width: 100%;

  &.lower {
    padding-left: calc(4ch - 1.5px);
  }

  .char-container {
    height: calc(1cap + (var(--_char-padding) * 2));
    overflow: hidden;
    user-select: none;
    cursor:
      url('/heart.svg') 12 12,
      default;
    &:hover,
    &.active {
      .char {
        transform: translateY(-100%);
      }
    }
    .char {
      padding: var(--_char-padding) 0;
      transition: all 0.5s ease;
    }
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  --_size: 0.125em;
  gap: 0.025em;
  bottom: calc(var(--_char-padding));
  right: 0;
  transform: translate(100%, 0%);

  .dot {
    width: var(--_size);
    height: var(--_size);
    border-radius: 50%;
    background-color: grey;

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
`;
