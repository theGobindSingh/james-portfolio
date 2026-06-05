import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import DualButton from '@components/dual-button';
import { homeHeroData } from '@data';
import {
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
import { ChevronLeftRounded } from '@mui/icons-material';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import { forwardRef, Ref, RefObject, useEffect, useRef } from 'react';

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

const Content = ({
  buttonText,
  clickHandler,
  text,
}: Pick<typeof homeHeroData, 'text' | 'buttonText'> & {
  clickHandler: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];
    const callback = (entries: IntersectionObserverEntry[]) => {
      const { isIntersecting } =
        entries?.[0] ?? ({} as IntersectionObserverEntry);
      if (!isIntersecting) return;
      const movedElems = Array.from(
        ref.current?.querySelectorAll('.moved') ?? [],
      );
      movedElems.forEach((elem, index) => {
        timeoutIds.push(
          // eslint-disable-next-line @eslint-react/web-api/no-leaked-timeout -- ESLint rule is not able to recognize that timeoutIds is defined in the outer scope of this callback function.
          setTimeout(() => {
            elem.classList.remove('moved');
          }, index * 350),
        );
      });
    };
    const observer = new IntersectionObserver(callback, { threshold: 0.99 });
    if (ref.current) observer.observe(ref.current);
    return () => {
      timeoutIds.forEach(clearTimeout);
      observer.disconnect();
    };
  }, []);
  return (
    <HomeHeroTextWrapper ref={ref}>
      <span className="greeting moved">Nice to meet you!</span>
      <p className="text moved">{text}</p>
      <DualButton text={buttonText} onClick={clickHandler} className="moved" />
    </HomeHeroTextWrapper>
  );
};

const Title = ({ text }: { text: string }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const chars = text.split('');
  const charMapper = (char: string, index: number) => {
    const key = `hero-title-${char}-${index}`;
    return (
      <span
        key={key}
        className={
          (index < text.indexOf(' ') ? 'moved-up' : 'moved-down') +
          (char === ' ' ? ' space' : '')
        }
      >
        {char}
      </span>
    );
  };
  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];
    const callback = (entries: IntersectionObserverEntry[]) => {
      const { isIntersecting } =
        entries?.[0] ?? ({} as IntersectionObserverEntry);
      if (!isIntersecting) return;
      const movedUpElems = Array.from(
        ref.current?.querySelectorAll('.moved-up') ?? [],
      );
      const movedDownElems = Array.from(
        ref.current?.querySelectorAll('.moved-down') ?? [],
      );
      movedUpElems.forEach((elem, index) => {
        timeoutIds.push(
          // eslint-disable-next-line @eslint-react/web-api/no-leaked-timeout -- ESLint rule is not able to recognize that timeoutIds is defined in the outer scope of this callback function.
          setTimeout(() => {
            elem.classList.remove('moved-up');
          }, index * 75),
        );
      });
      movedDownElems.forEach((elem, index) => {
        timeoutIds.push(
          // eslint-disable-next-line @eslint-react/web-api/no-leaked-timeout -- ESLint rule is not able to recognize that timeoutIds is defined in the outer scope of this callback function.
          setTimeout(() => {
            elem.classList.remove('moved-down');
          }, index * 75),
        );
      });
    };
    const observer = new IntersectionObserver(callback, { threshold: 0.99 });
    if (ref.current) observer.observe(ref.current);
    return () => {
      timeoutIds.forEach(clearTimeout);
      observer.disconnect();
    };
  }, []);
  return <HomeHeroTitle ref={ref}>{chars.map(charMapper)}</HomeHeroTitle>;
};

const HomeHeroWithoutRef = (_: unknown, ref: Ref<HTMLDivElement>) => {
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
    >
      <Title text={title} />
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
        {/* <HeroArrow css={homeHeroArrowStyles} /> */}
        <Content
          text={text}
          buttonText={buttonText}
          clickHandler={clickHandler}
        />
      </HomeHeroContentWrapper>
      <HomeHeroDateTextWrapper>
        <span className="text">{dateText}</span>
        <span className="date">{date}</span>
      </HomeHeroDateTextWrapper>
      <HomeHeroLineBox>
        <div className="box _1">
          <ChevronLeftRounded className="icon" />
        </div>
        <div className="box _2">
          <ChevronLeftRounded className="icon" />
        </div>
      </HomeHeroLineBox>
    </CommonFullWidthWrapper>
  );
};

const HomeHero = forwardRef(HomeHeroWithoutRef);
export default HomeHero;
