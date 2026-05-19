import { theme } from '@/theme';
import Header from '@components/header';
import SideNav from '@components/side-nav';
import { ThemeProvider } from '@kami-ui/next-theme';
import BlackSection from '@modules/home/black-section';
import Grainy from '@modules/home/grainy';
import HomeHero from '@modules/home/hero';
import { ReactLenis } from 'lenis/react';
import { PropsWithChildren, useEffect, useRef } from 'react';

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
  const screenHeightForScrollRef = useRef<number>(900);
  const sideNavRef = useRef<HTMLDivElement>(null);
  const homeHeroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { innerHeight } = window;
    screenHeightForScrollRef.current = 0.8 * innerHeight;
  }, []);

  return (
    <HomeWrapperWithComponents>
      <Header />
      <SideNav ref={sideNavRef} />
      <HomeHero ref={homeHeroRef} />
      <BlackSection />
      {/* <div
        css={{
          marginTop: 'calc(100svh - var(--header-height))',
          zIndex: 1,
          position: 'relative',
          isolation: 'isolate',
        }}
      >
      </div> */}
    </HomeWrapperWithComponents>
  );
};

export default Home;
