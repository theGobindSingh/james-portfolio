import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import DualButton from '@components/dual-button';
import { email, headerAndNavData, homeContactData } from '@data';
import {
  ContactContent,
  contactSectionWrapperStyles,
} from '@modules/home/contact/styles';
import Link from 'next/link';

const ContactSection = () => {
  const { title, description, emailCtaText } = homeContactData;
  const socialLinks = headerAndNavData.bottomLinks ?? [];

  const emailClickHandler = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <CommonFullWidthWrapper
      element="section"
      wrapperCss={contactSectionWrapperStyles}
      className="contact"
    >
      <ContactContent>
        <h2 className="title">{title}</h2>
        <div>
          <p className="description">{description}</p>
          <DualButton
            text={emailCtaText}
            onClick={emailClickHandler}
            className="email-button"
          />
          <ul className="social-list">
            {socialLinks.map((socialLink) => {
              return (
                <li key={socialLink.url}>
                  <Link href={socialLink.url} className="social-link">
                    {socialLink.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </ContactContent>
    </CommonFullWidthWrapper>
  );
};

export default ContactSection;
