import React from 'react'
import { DashboardLayout } from '../../../components/dashboardLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ManageTournements({ locale }: any) {
    return (
        <DashboardLayout>
            <p>ManageTournements</p>
        </DashboardLayout>
    )
}

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            // Will be passed to the page component as props
        },
    };
}