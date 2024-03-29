import { Head, Html, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

export default function Document(props: any) {
    const { locale } = useRouter() ?? 'ar'

    return (
        <Html
            className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
            lang={locale}
        >
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
                />
            </Head>
            <body className="flex h-full flex-col" dir={'rtl'}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
