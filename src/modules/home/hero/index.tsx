import arrowHeadImg from '@assets/images/arrowhead.png';
import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import DualButton from '@components/dual-button';
import { homeHeroData } from '@data';
import HeroArrow from '@icons/v2/hero-arrow';
import {
  homeHeroArrowStyles,
  homeHeroContainerStyles,
  HomeHeroContentWrapper,
  HomeHeroDateTextWrapper,
  homeHeroImgStyles,
  HomeHeroLineBox,
  HomeHeroTextWrapper,
  HomeHeroTitle,
  homeHeroWrapperStyles,
  HomeImageContainer,
} from '@modules/home/hero/styles';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import { forwardRef, Ref, RefObject, useRef } from 'react';

interface HomeHeroProps {
  className?: string;
}

const {
  img,
  imgMobile,
  text,
  title,
  date,
  dateText,
  buttonText,
  buttonTargetClassName,
} = homeHeroData;

const HomeHeroWithoutRef = (
  { className }: HomeHeroProps,
  ref: Ref<HTMLDivElement>,
) => {
  const fallbackRef = useRef<HTMLDivElement>(null);

  const clickHandler = () => {
    const target = document.querySelector(`.${buttonTargetClassName}`);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  useLenis(() => {
    const elem =
      (ref as RefObject<HTMLDivElement>)?.current ?? fallbackRef.current;
    if (!elem) return;
    const scrollPosition = window.scrollY;
    const percent = (scrollPosition * 100) / window.innerHeight;
    if (percent > 100) return;
    elem.style.transform = `scale(${100 - percent / 10}%)`;
    elem.style.opacity = `${100 - percent * 1.5}%`;
  }, []);

  return (
    <CommonFullWidthWrapper
      wrapperCss={homeHeroWrapperStyles}
      css={homeHeroContainerStyles}
      ref={ref ?? fallbackRef}
      className={className}
    >
      <HomeHeroTitle>{title}</HomeHeroTitle>
      <HomeImageContainer>
        <Image
          src={img}
          alt=""
          css={homeHeroImgStyles}
          priority
          className="desktop"
        />
        <Image
          src={imgMobile}
          alt=""
          css={homeHeroImgStyles}
          priority
          className="mobile"
        />
      </HomeImageContainer>
      <HomeHeroContentWrapper>
        <HeroArrow css={homeHeroArrowStyles} />
        <HomeHeroTextWrapper>
          <p className="text">{text}</p>
          <DualButton text={buttonText} onClick={clickHandler} />
        </HomeHeroTextWrapper>
      </HomeHeroContentWrapper>
      <HomeHeroDateTextWrapper>
        <span className="text">{dateText}</span>
        <span className="date">{date}</span>
      </HomeHeroDateTextWrapper>
      <HomeHeroLineBox>
        <div className="box _1">
          <Image src={arrowHeadImg} alt="" className="icon" />
        </div>
        <div className="box _2">
          <Image src={arrowHeadImg} alt="" className="icon" />
        </div>
      </HomeHeroLineBox>
    </CommonFullWidthWrapper>
  );
};

const HomeHero = forwardRef(HomeHeroWithoutRef);
export default HomeHero;
