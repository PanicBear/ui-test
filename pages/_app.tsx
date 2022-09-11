import { RecoilModalManager } from '@components/atoms';
import { Color, GlobalStyles, Layout, Shadow } from '@styles/index';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={{ Color, Shadow, Layout }}>
        <RecoilModalManager />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
