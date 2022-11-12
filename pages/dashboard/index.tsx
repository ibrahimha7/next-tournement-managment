import React from 'react'
import { DashboardLayout } from '../../components/dashboardLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Dashboard({ locale }: any) {
    return (
        <DashboardLayout>
            <p>hello world</p>
        </DashboardLayout>
    )
}

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'footer'])),
            // Will be passed to the page component as props
        },
    };
}