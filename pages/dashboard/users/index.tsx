import React from 'react'
import { DashboardLayout } from '../../../components/dashboardLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ListWithAction from '../../../components/TableWithAction';
import {
    createColumnHelper
} from '@tanstack/react-table'
import { IUser } from '../../../interfaces';
import { useTranslation } from 'next-i18next';

export default function ManagePlayers({ locale }: any) {
    const { t } = useTranslation()
    const columnHelper = createColumnHelper<IUser>()
    const columns = [
        columnHelper.accessor('username', {
            cell: info => info.getValue(),
            header: () => <span>{t('USERNAME')}</span>,
            footer: info => info.column.id,
        }),
        columnHelper.accessor(row => row.email, {
            id: 'email',
            cell: info => <i>{info.getValue()}</i>,
            header: () => <span>{t('EMAIL')}</span>,
            footer: info => info.column.id,
        }),
        columnHelper.accessor('user_type', {
            header: () => <span>{t('USER_TYPE')}</span>,
            cell: info => info.renderValue(),
            footer: info => info.column.id,
        })
    ]

    const data: IUser[] = [
        {
            username: 'ابراهيم العبدلي',
            email: 'ibrahimha@outlook.com',
            user_type: t('PLAYER')
        },
        {
            username: 'عبدالرحمن',
            email: 'abdullrhman@outlook.com',
            user_type: t('PLAYER')
        },
        {
            username: 'عبدالله',
            email: 'abullah@outlook.com',
            user_type: t('PLAYER')
        },
    ]

    return (
        <DashboardLayout>
            <ListWithAction columns={columns} action={'ADD_USER'} data={data} title={t('USERS')} description={"إدارة المستخدمين"} />
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