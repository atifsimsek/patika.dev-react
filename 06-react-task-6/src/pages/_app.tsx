import { CssBaseline, ThemeProvider } from '@mui/material';
import '../styles/globals.css';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import theme from '@/styles/theme';
import createEmotionCache from '@/styles/createEmotionCache';
import StoreProvider from '@/store/StoreProvider';
import Layout from '@/components/Layout';
import { useEffect } from 'react';
import { store } from '@/store';
import { fetchBooks } from '@/store/services/bookService';
import { Provider } from 'react-redux';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    //Material Ui SSR setup
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
