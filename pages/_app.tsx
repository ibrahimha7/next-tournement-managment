import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'focus-visible'
import { appWithTranslation } from 'next-i18next';

export function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(App);
