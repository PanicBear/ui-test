import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Color, GlobalStyles, Layout, Shadow } from '@styles/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ Color, Shadow, Layout }}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
