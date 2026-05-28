import { theme } from '@/theme';
import Header from '@components/header';
import { ThemeProvider } from '@kami-ui/next-theme';
import AboutSection from '@modules/home/about';
import BlackSection from '@modules/home/black-section';
import ContactSection from '@modules/home/contact';
import EssaysPreview from '@modules/home/essays-preview';
import Expertise from '@modules/home/expertise';
import FeaturedWork from '@modules/home/featured-work';
import HomeFooter from '@modules/home/footer';
import Grainy from '@modules/home/grainy';
import HomeHero from '@modules/home/hero';
import { ReactLenis } from 'lenis/react';
import { PropsWithChildren } from 'react';

const HomeWrapperWithComponents = ({
  children,
}: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider theme={theme}>
      <Grainy />
      <ReactLenis root options={{ duration: 1 }}>
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
};

const Home = () => {
  return (
    <HomeWrapperWithComponents>
      <Header position="default" />
      <HomeHero className="hero" />
      <BlackSection />
      <Expertise />
      <FeaturedWork />
      <EssaysPreview />
      <AboutSection />
      <ContactSection />
      <HomeFooter />
    </HomeWrapperWithComponents>
  );
};

export default Home;
