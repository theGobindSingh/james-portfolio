import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const blackSectionWrapperStyles = css`
  background-color: rgba(8, 8, 7);
  color: var(--color-text-100);
  margin-top: calc(100svh - var(--header-height));
  z-index: 1;
  position: relative;
  isolation: isolate;
`;

export const BlackSectionWrapper = styled(CommonFullWidthWrapper)`
  padding: 5rem 0;
`;

export const LiveByDesignWrapper = styled.div`
  margin-bottom: 50vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;

  .title-container {
    width: 540px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: calc(var(--fs-4xl) + var(--fs-3xl));
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
        &:hover {
          .char {
            transform: translateY(-100%);
          }
        }
      }
    }

    .dots-container {
      position: absolute;
      top: calc(0.8em - 27.5px);
      display: flex;
      gap: 0.7rem;
      left: 67.5%;
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
          background-color: #dddddd;
        }
      }
    }
  }

  .desc {
    width: 40%;
  }
`;
