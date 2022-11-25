import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'focus-visible'
import { appWithTranslation } from 'next-i18next';

import { Cairo_Play } from '@next/font/google'
const inter = Cairo_Play({ subsets: ['arabic']})

export function App({ Component, pageProps }: AppProps) {
  return (
  <main className={inter.className}>
    <Component {...pageProps} />
  </main>)
}

export default appWithTranslation(App);
