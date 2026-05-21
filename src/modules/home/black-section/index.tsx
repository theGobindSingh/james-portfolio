import raggedImg from '@assets/images/ragged.png';
import LiveByDesign from '@components/live-by-design';
import {
  BlackSectionWrapper,
  blackSectionWrapperStyles,
  LiveByDesignWrapper,
} from '@modules/home/black-section/styles';
import Image from 'next/image';
import { forwardRef } from 'react';

const BlackSectionWithoutRef = () => {
  return (
    <>
      <Image
        src={raggedImg}
        alt=""
        css={{
          width: '100%',
          height: 'auto',
          margin: '0',
          marginTop: 'calc(100svh - var(--header-height))',
          position: 'relative',
          display: 'block',
          filter: 'invert(1) ',
        }}
      />
      <BlackSectionWrapper wrapperCss={blackSectionWrapperStyles}>
        <LiveByDesignWrapper>
          <LiveByDesign />
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
    </>
  );
};

const BlackSection = forwardRef(BlackSectionWithoutRef);
export default BlackSection;
