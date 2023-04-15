import { CssBaseline, ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import theme from "@/config/theme";
import createEmotionCache from "@/config/createEmotionCache";

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
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
