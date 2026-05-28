import { theme } from '@/theme';
import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import DualButton from '@components/dual-button';
import Header from '@components/header';
import {
  contactPageData,
  email,
  headerAndNavData,
  workHeaderNavData,
} from '@data';
import { ThemeProvider } from '@kami-ui/next-theme';
import {
  ContactHero,
  ContactPageRoot,
  ContactPanels,
  ContactSocialRow,
  contactMainWrapperStyles,
} from '@modules/contact/styles';
import Grainy from '@modules/home/grainy';
import { ReactLenis } from 'lenis/react';

const Contact = () => {
  const {
    eyebrow,
    title,
    intro,
    responseNote,
    primaryCardTitle,
    primaryCardDescription,
    emailCtaText,
    collaborationTitle,
    collaborationPoints,
    socialLabel,
  } = contactPageData;
  const socialLinks = headerAndNavData.bottomLinks ?? [];

  const emailClickHandler = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <ThemeProvider theme={theme}>
      <Grainy />
      <ReactLenis root options={{ duration: 1 }}>
        <ContactPageRoot>
          <Header navData={workHeaderNavData} position="fixed" />

          <CommonFullWidthWrapper
            element="main"
            wrapperCss={contactMainWrapperStyles}
            className="contact"
          >
            <ContactHero>
              <div>
                <p className="eyebrow">{eyebrow}</p>
                <h1 className="title">{title}</h1>
              </div>
              <div>
                <p className="intro">{intro}</p>
                <p className="response-note">{responseNote}</p>
              </div>
            </ContactHero>

            <ContactPanels>
              <article className="card">
                <h2 className="card-title">{primaryCardTitle}</h2>
                <p className="card-description">{primaryCardDescription}</p>
                <DualButton
                  text={emailCtaText}
                  onClick={emailClickHandler}
                  className="email-button"
                />
              </article>

              <article className="card">
                <h2 className="card-title">{collaborationTitle}</h2>
                <ul className="point-list">
                  {collaborationPoints.map((point) => {
                    return <li key={point}>{point}</li>;
                  })}
                </ul>
              </article>
            </ContactPanels>

            <ContactSocialRow>
              <p className="label">{socialLabel}</p>
              <ul className="social-list">
                {socialLinks.map((socialLink) => {
                  return (
                    <li key={socialLink.url}>
                      <a
                        href={socialLink.url}
                        className="social-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {socialLink.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </ContactSocialRow>
          </CommonFullWidthWrapper>
        </ContactPageRoot>
      </ReactLenis>
    </ThemeProvider>
  );
};

export default Contact;
