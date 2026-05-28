import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import {
  DesignationText,
  headerContainerStyles,
  HeaderPosition,
  headerWrapperStyles,
  LogoAndDesignation,
  NavWrapper,
} from '@components/header/styles';
import LinkText from '@components/link-text';
import { headerAndNavData, HeaderNavData, HeaderNavLink } from '@data';
import { ComponentProps, forwardRef, Ref } from 'react';

type HeaderWrapperCss = ComponentProps<
  typeof CommonFullWidthWrapper
>['wrapperCss'];

interface HeaderProps {
  navData?: HeaderNavData;
  position?: HeaderPosition;
  className?: string;
  wrapperCss?: HeaderWrapperCss;
}

const HeaderWithoutRef = (
  {
    navData = headerAndNavData,
    position = 'default',
    className,
    wrapperCss,
  }: HeaderProps,
  ref: Ref<HTMLDivElement>,
) => {
  const { links, middleText } = navData;

  const mergedWrapperCss = wrapperCss
    ? Array.isArray(wrapperCss)
      ? [headerWrapperStyles(position), ...wrapperCss]
      : [headerWrapperStyles(position), wrapperCss]
    : headerWrapperStyles(position);

  const primaryLinksMapper = ({
    text,
    href,
    targetClassName,
  }: HeaderNavLink) => {
    const linkKey = targetClassName ?? href ?? text;

    if (targetClassName) {
      const clickHandler = () => {
        const target = document.querySelector(`.${targetClassName}`);
        target?.scrollIntoView({ behavior: 'smooth' });
      };

      return (
        <li key={`nav-link-${linkKey}`} className="list-elem">
          <LinkText text={text} onClick={clickHandler} />
        </li>
      );
    }

    if (!href) {
      return null;
    }

    return (
      <li key={`nav-link-${linkKey}`} className="list-elem">
        <LinkText text={text} href={href} />
      </li>
    );
  };

  return (
    <CommonFullWidthWrapper
      element="header"
      css={headerContainerStyles}
      ref={ref}
      className={className}
      wrapperCss={mergedWrapperCss}
    >
      <LogoAndDesignation>
        <DesignationText>{`${middleText}`}</DesignationText>
      </LogoAndDesignation>
      <NavWrapper>
        <ul className="list-container">{links.map(primaryLinksMapper)}</ul>
      </NavWrapper>
    </CommonFullWidthWrapper>
  );
};

const Header = forwardRef(HeaderWithoutRef);
export default Header;
