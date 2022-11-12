/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { DashboardLayout } from '../../../components/dashboardLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ListWithAction from '../../../components/TableWithAction';
import {
    createColumnHelper
} from '@tanstack/react-table'
import { ITeams, IUser } from '../../../interfaces';
import { useTranslation } from 'next-i18next';

export default function ManageTeams({ locale, data }: any) {
    const { t } = useTranslation()
    const columnHelper = createColumnHelper<any>()
    const columns = [
        columnHelper.accessor(row => row.attributes, {
            id: 'attributes',
            cell: info => info.getValue(),
            header: () => <span>{t('TEAM_NAME')}</span>,
            footer: info => info.column.id,
        }),
        columnHelper.accessor(row => row.attributes, {
            id: 'name',
            cell: (info) => {
                console.log('getValue', info.getValue())
                return (
                    <i>{info.getValue()}</i>
                )
            },
            header: () => <span>{t('TEAM_NAME')}</span>,
            footer: info => info.column.id,
        }),
        columnHelper.accessor(row => row.attributes, {
            id: 'createdAt',
            header: () => <span>{t('CREATED_AT')}</span>,
            cell: info => info.renderValue(),
            footer: info => info.column.id,
        })
    ]

    useEffect(() => {
        console.log('columns', columns)
    }, [columns])


    return (
        <DashboardLayout>
            <ListWithAction columns={columns} action={'CREATE_TEAM'} data={[data] ?? []} title={t('TEAMS')} description={"إدارة الفرق"} />
        </DashboardLayout>
    )
}

export async function getStaticProps({ locale }: any) {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/teams?populate=*`)
    const { data, meta } = await res.json()

    if (res.status === 200) {
        console.log('pass');
        return {
            props: {
                data,
                ...(await serverSideTranslations(locale, ['common'])),
                // Will be passed to the page component as props
            },
        };
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            // Will be passed to the page component as props
        },
    };
}