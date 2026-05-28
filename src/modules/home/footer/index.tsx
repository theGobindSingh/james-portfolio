import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import { fullName } from '@data';
import {
  HomeFooterContent,
  homeFooterWrapperStyles,
} from '@modules/home/footer/styles';

const currentYear = new Date().getFullYear();

const HomeFooter = () => {
  return (
    <CommonFullWidthWrapper wrapperCss={homeFooterWrapperStyles}>
      <HomeFooterContent>
        <p className="copyright">{`${fullName} | ${currentYear}`}</p>
        <p className="tagline">
          Creative strategy, identity systems, and operations design.
        </p>
      </HomeFooterContent>
    </CommonFullWidthWrapper>
  );
};

export default HomeFooter;
