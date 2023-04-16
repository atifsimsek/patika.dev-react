import { CssBaseline, ThemeProvider } from '@mui/material';
import '../styles/globals.css';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import theme from '@/styles/theme';
import createEmotionCache from '@/styles/createEmotionCache';
import { Provider } from 'react';
import { store } from '@/store';
import StoreProvider from '@/store/StoreProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    //Material Ui SSR setup
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StoreProvider preloadedState={{}}>
          <Component {...pageProps} />
        </StoreProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
