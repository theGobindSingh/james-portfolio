import { LiveByDesignWrapper } from '@components/live-by-design/styles';
import { useEffect, useRef } from 'react';

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
      <span className="char top">{char}</span>
      <span className="char bottom">{char}</span>
    </div>
  );
};

const LiveByDesign = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // let _t1: NodeJS.Timeout, _t2: NodeJS.Timeout;
    const callback: IntersectionObserverCallback = (entries) => {
      const { isIntersecting } = entries[0] ?? ({} as never);
      if (isIntersecting) {
        const charContainers = Array.from<HTMLDivElement>(
          ref.current?.querySelectorAll('.char-container') ?? [],
        );
        for (let i = 0; i < charContainers.length; i++) {
          //   const charContainer = charContainers[i];
        }
      }
    };
    const observer: IntersectionObserver = new IntersectionObserver(callback);
    observer.observe(ref.current!);
    return () => {
      observer.disconnect();
      //   clearTimeout(_t1);
      //   clearTimeout(_t2);
    };
  }, []);
  return (
    <LiveByDesignWrapper className="title-container" ref={ref}>
      <div className="title-box">
        <div className="title-upper">
          {'Live by '.split('').map(titleMapper)}
        </div>
        <div className="title-lower">{'design'.split('').map(titleMapper)}</div>
      </div>
      <div className="dots-container">
        <div className="dot first blue" />
        <div className="dot second pink" />
        <div className="dot third yellow" />
        <div className="dot fourth white" />
      </div>
    </LiveByDesignWrapper>
  );
};

export default LiveByDesign;
