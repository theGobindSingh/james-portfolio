import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import {
  DesignationText,
  headerContainerStyles,
  LogoAndDesignation,
  NavWrapper,
} from '@components/header/styles';
import LinkText from '@components/link-text';
import { headerAndNavData } from '@data';
import { forwardRef, Ref } from 'react';

const HeaderWithoutRef = (_: unknown, ref: Ref<HTMLDivElement>) => {
  const { links, middleText } = headerAndNavData;

  const primaryLinksMapper = ({ text, targetClassName }: (typeof links)[0]) => {
    const clickHandler = () => {
      const target = document.querySelector(`.${targetClassName}`);
      target?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
      <li key={`nav-link-${targetClassName}`} className="list-elem">
        <LinkText text={text} onClick={clickHandler} />
      </li>
    );
  };

  return (
    <CommonFullWidthWrapper
      element="header"
      css={headerContainerStyles}
      ref={ref}
    >
      <LogoAndDesignation>
        {/* <Link href="/" css={logoLinkStyles}>
          {logoText}
        </Link> */}
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
