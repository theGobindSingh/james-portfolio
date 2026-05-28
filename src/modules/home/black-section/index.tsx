import raggedImg from '@assets/images/ragged.png';
import LiveByDesign from '@components/live-by-design';
import { blackSectionData } from '@data';
import {
  BlackSectionWrapper,
  blackSectionWrapperStyles,
  LiveByDesignWrapper,
} from '@modules/home/black-section/styles';
import Image from 'next/image';
import { forwardRef } from 'react';

const BlackSectionWithoutRef = () => {
  const { description } = blackSectionData;

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
          <p className="desc">{description}</p>
        </LiveByDesignWrapper>
      </BlackSectionWrapper>
    </>
  );
};

const BlackSection = forwardRef(BlackSectionWithoutRef);
export default BlackSection;
