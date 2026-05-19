import { about, fullName } from '@data';
import { Global } from '@emotion/react';
import globalStyles from '@styles/global';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{`${fullName} | Portfolio`}</title>
        <meta
          name="description"
          content={`${fullName} | Portfolio | ${about}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          href="/assets/images/among.png"
          type="image/x-icon"
        />
      </Head>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
