import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../app/src/config/createEmotionCache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../app/src/config/theme';
import { Layout } from '../app/src/components/shared/layout/Layout';

const clientSideEmotionCache = createEmotionCache();

interface BeatstarsTrendsProps extends AppProps {
  emotionCache?: EmotionCache;
}

function BeatstarsTrendsApp(props: BeatstarsTrendsProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default BeatstarsTrendsApp;
