import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import DualButton from '@components/dual-button';
import { homeAboutData } from '@data';
import {
  AboutContent,
  aboutSectionWrapperStyles,
} from '@modules/home/about/styles';

const AboutSection = () => {
  const { title, intro, detail, principles, resumeText, resumeUrl } =
    homeAboutData;

  const resumeClickHandler = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <CommonFullWidthWrapper
      element="section"
      wrapperCss={aboutSectionWrapperStyles}
      className="about"
    >
      <AboutContent>
        <div>
          <p className="label">About</p>
          <h2 className="title">{title}</h2>
        </div>
        <div>
          <p className="intro">{intro}</p>
          <p className="detail">{detail}</p>
          <ul className="principles">
            {principles.map((principle) => {
              return <li key={principle}>{principle}</li>;
            })}
          </ul>
          <DualButton
            text={resumeText}
            onClick={resumeClickHandler}
            className="resume-button"
          />
        </div>
      </AboutContent>
    </CommonFullWidthWrapper>
  );
};

export default AboutSection;
