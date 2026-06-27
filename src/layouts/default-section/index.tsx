import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import LinkText from '@components/link-text';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FullWidthWrapperProps } from '@kami-ui/react-components';
import { mediaQuery } from '@styles/global';
import { PropsWithChildren } from 'react';

const DefaultSectionWrapper = styled(CommonFullWidthWrapper)`
  color: var(--color-text-900);
  position: relative;
  z-index: 1;
  padding: 2.5rem 0;
  display: flex;
  flex-direction: ${({ dir = 'column' }: DefaultSectionProps) => {
    return dir;
  }};
  gap: 1.5rem;

  & > .section-header {
    display: flex;
    flex-direction: column;
    ${({ dir = 'column' }: DefaultSectionProps) => {
      return dir === 'row'
        ? css`
            width: 100%;
          `
        : '';
    }}
    gap: 1.5rem;
    margin-bottom: 2rem;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 1rem;
    }
    .title {
      margin: 0;
      font-size: var(--fs-4xl);
      line-height: 0.95;
      letter-spacing: 0.05em;
    }

    .subtitle {
      margin: 0;
      max-width: 42ch;
      color: var(--color-text-600);
      font-size: var(--fs-1xs);
      line-height: 1.5;
    }

    .cta {
      font-family: var(--font-mono);
      font-size: var(--fs-3xs);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--color-text-700);
      flex-shrink: 0;
      margin-bottom: 0.4rem;
    }
  }

  ${mediaQuery.nonDesktop} {
    flex-direction: ${({
      dir = 'column',
      mobileDir = dir,
    }: DefaultSectionProps) => {
      return mobileDir;
    }};
    & > .section-header {
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 1.25rem;
      gap: 0.65rem;
      .title {
        font-size: var(--fs-3xl);
      }

      .subtitle {
        margin-bottom: 0;
        font-size: var(--fs-2xs);
      }

      .cta {
        font-size: var(--fs-4xs);
        margin-bottom: 0;
      }
    }
  }
`;

interface DefaultSectionProps extends Omit<
  FullWidthWrapperProps,
  'element' | 'children'
> {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  dir?: 'row' | 'column';
  mobileDir?: 'row' | 'column';
}

const DefaultSection = ({
  title,
  subtitle,
  ctaText,
  children,
  wrapperCss = {} as never,
  ...props
}: PropsWithChildren<DefaultSectionProps>) => {
  return (
    <DefaultSectionWrapper
      element="section"
      {...props}
      css={{
        borderBottom: '1px solid var(--color-text-300)',
      }}
      wrapperCss={
        {
          ...wrapperCss,
          backgroundColor: 'var(--color-white)',
        } as never
      }
    >
      <div className="section-header">
        {title && <h2 className="title">{title}</h2>}
        <div className="sub-header">
          {subtitle && <p className="subtitle">{subtitle}</p>}
          {ctaText && <LinkText text={ctaText} className="cta" />}
        </div>
      </div>
      {children}
    </DefaultSectionWrapper>
  );
};

export default DefaultSection;
