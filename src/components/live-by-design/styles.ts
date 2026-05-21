import styled from '@emotion/styled';

export const LiveByDesignWrapper = styled.div`
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
    /* top: calc(0.8em - 27.5px); */
    bottom: 0;
    right: 0;
    transform: translate(100%, -0.1em);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    /* left: 67.5%; */
    width: fit-content;
    height: fit-content;
    /* border: 1px solid black; */
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
`;
