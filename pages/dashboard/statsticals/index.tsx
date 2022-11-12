import React from 'react'
import { DashboardLayout } from '../../../components/dashboardLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ManageStatisticals({ locale }: any) {
    return (
        <DashboardLayout>
            <p>Manage Statictical</p>
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