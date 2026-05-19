import {
  BlackSectionWrapper,
  blackSectionWrapperStyles,
  LiveByDesignWrapper,
} from '@modules/home/black-section/styles';
import { forwardRef } from 'react';

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

const BlackSectionWithoutRef = () => {
  return (
    <BlackSectionWrapper wrapperCss={blackSectionWrapperStyles}>
      <LiveByDesignWrapper>
        <div className="title-container">
          <div className="title-box">
            <div className="title-upper">
              {'Live by '.split('').map(titleMapper)}
            </div>
            <div className="title-lower">
              {'design'.split('').map(titleMapper)}
            </div>
          </div>
          <div className="dots-container">
            <div className="dot first blue" />
            <div className="dot second pink" />
            <div className="dot third yellow" />
            <div className="dot fourth white" />
          </div>
        </div>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          placeat alias ipsum eaque eligendi quis, mollitia laudantium. Iusto
          doloremque atque accusamus iure numquam fuga error ipsum inventore
          sint, ipsam at nulla cupiditate exercitationem velit adipisci eaque,
          dolorem modi cum obcaecati. Veniam sed consectetur tempore obcaecati
          ipsam rerum iusto iste dolore.
        </p>
      </LiveByDesignWrapper>
    </BlackSectionWrapper>
  );
};

const BlackSection = forwardRef(BlackSectionWithoutRef);
export default BlackSection;
