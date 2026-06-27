import DefaultSection from '@/layouts/default-section';
import DualButton from '@components/dual-button';
import { homeAboutData } from '@data';
import { AboutContent } from '@modules/home/about/styles';

const AboutSection = () => {
  const { title, intro, detail, principles, resumeText, resumeUrl } =
    homeAboutData;

  const resumeClickHandler = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <DefaultSection title={title} dir="row" mobileDir="column">
      <AboutContent>
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
      </AboutContent>
    </DefaultSection>
  );
};

export default AboutSection;
