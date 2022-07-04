import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Color, GlobalStyles, Layout, Shadow } from '@styles/index';
import { ModalProvider } from 'context';
import { ModalList } from '@components/molecules';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ Color, Shadow, Layout }}>
      <GlobalStyles />
      <ModalProvider modals={ModalList}>
        <Component {...pageProps} />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
