import type { AppProps } from 'next/app';
import '../css/default.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
