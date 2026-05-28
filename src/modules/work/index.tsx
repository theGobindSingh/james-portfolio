import { theme } from '@/theme';
import CommonFullWidthWrapper from '@components/common-full-width-wrapper';
import Header from '@components/header';
import { email, workHeaderNavData, workPageData } from '@data';
import { ThemeProvider } from '@kami-ui/next-theme';
import Grainy from '@modules/home/grainy';
import {
  WorkCaseStudyGrid,
  WorkCtaStrip,
  WorkDetailNote,
  WorkHero,
  WorkPageRoot,
  workMainWrapperStyles,
} from '@modules/work/styles';
import { ReactLenis } from 'lenis/react';
import Link from 'next/link';

const Work = () => {
  const {
    eyebrow,
    title,
    intro,
    processTitle,
    processPoints,
    caseStudies,
    detailStatusNote,
    bottomCta,
  } = workPageData;

  return (
    <ThemeProvider theme={theme}>
      <Grainy />
      <ReactLenis root options={{ duration: 1 }}>
        <WorkPageRoot>
          <Header navData={workHeaderNavData} position="fixed" />

          <CommonFullWidthWrapper
            element="main"
            wrapperCss={workMainWrapperStyles}
          >
            <WorkHero>
              <div>
                <p className="eyebrow">{eyebrow}</p>
                <h1 className="title">{title}</h1>
                <p className="intro">{intro}</p>
              </div>
              <aside className="process-card" aria-label="Working process">
                <h2 className="process-title">{processTitle}</h2>
                <ul className="process-list">
                  {processPoints.map((point) => {
                    return <li key={point}>{point}</li>;
                  })}
                </ul>
              </aside>
            </WorkHero>

            <WorkCaseStudyGrid>
              {caseStudies.map((caseStudy, index) => {
                const requestStudyHref = `mailto:${email}?subject=${encodeURIComponent(
                  `Case Study Request: ${caseStudy.title}`,
                )}`;

                return (
                  <article className="card" key={caseStudy.slug}>
                    <div className="card-head">
                      <p className="index">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <p className="category">{caseStudy.category}</p>
                    </div>

                    <h2 className="title">{caseStudy.title}</h2>
                    <p className="timeline">{caseStudy.timeline}</p>
                    <p className="summary">{caseStudy.summary}</p>

                    <ul className="focus-list">
                      {caseStudy.strategicFocus.map((focus) => {
                        return <li key={focus}>{focus}</li>;
                      })}
                    </ul>

                    <p className="outcome">{caseStudy.outcome}</p>

                    <div className="metric-grid">
                      {caseStudy.metrics.map((metric) => {
                        return (
                          <div className="metric" key={metric.label}>
                            <span className="value">{metric.value}</span>
                            <span className="label">{metric.label}</span>
                          </div>
                        );
                      })}
                    </div>

                    <a href={requestStudyHref} className="request-link">
                      Request full breakdown ↗
                    </a>
                  </article>
                );
              })}
            </WorkCaseStudyGrid>

            <WorkDetailNote>{detailStatusNote}</WorkDetailNote>

            <WorkCtaStrip>
              <div>
                <h2 className="title">{bottomCta.title}</h2>
                <p className="description">{bottomCta.description}</p>
              </div>
              <div className="actions">
                <a href={bottomCta.primaryUrl} className="action-link">
                  {bottomCta.primaryText}
                </a>
                <Link
                  href={bottomCta.secondaryUrl}
                  className="action-link secondary"
                >
                  {bottomCta.secondaryText}
                </Link>
              </div>
            </WorkCtaStrip>
          </CommonFullWidthWrapper>
        </WorkPageRoot>
      </ReactLenis>
    </ThemeProvider>
  );
};

export default Work;
