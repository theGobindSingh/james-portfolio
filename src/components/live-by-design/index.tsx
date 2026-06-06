import {
  DotsContainer,
  LiveByDesignWrapper,
  TitleRow,
} from '@components/live-by-design/styles';
import { useRef } from 'react';

const titleMapper = (char: string, index: number) => {
  if (char === ' ') {
    return (
      <div key={index} style={{ width: '0.3em' }} className="char-container">
        {' '}
      </div>
    );
  }
  return (
    <div key={index} className="char-container">
      <div className="char top">{char}</div>
      <div className="char bottom">{char}</div>
    </div>
  );
};

const LiveByDesign = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <LiveByDesignWrapper className="title-container" ref={ref}>
      <div className="title-box">
        <TitleRow className="title-row upper">
          {'Live By'.split('').map(titleMapper)}
        </TitleRow>
        <TitleRow className="title-row lower">
          {'Design'.split('').map(titleMapper)}
        </TitleRow>
        <DotsContainer className="dots-container">
          <div className="dot _1 blue" />
          <div className="dot _2 pink" />
          <div className="dot _3 yellow" />
          <div className="dot _4 white" />
        </DotsContainer>
      </div>
    </LiveByDesignWrapper>
  );
};

export default LiveByDesign;
