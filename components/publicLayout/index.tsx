import { FC } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

export function PublicLayout({ children }: any) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
