/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { DashboardLayout } from '../../../components/dashboardLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ListWithAction from '../../../components/TableWithAction';
import { useTranslation } from 'next-i18next';
import { Axios } from '../../../services/Axios';


const columns = [
    {
        title: 'الاسم',
        key: 'name',
        type: 'text' 
    },
    {
        title: 'الشعار',
        key: 'logo',
        type: 'avatar'
    }
]

export default function ManageTeams({ locale, data }: any) {
    const { t } = useTranslation()
    const [newData, setNewData] = useState<any>([])

    const handleRenderTeams = () => {
        const tempData:any[] = []
        data.data.map((item:any) => {
            const {id , attributes} = item || {}
            const {name , logo} = attributes

            tempData.push({
                id,
                name,
                logo: `${process.env.NEXT_BASE_URL}${logo.data.attributes.url}`
            })

        })
        setNewData(tempData)
    }

    useEffect(() => {
        if(data.data.length > 0) {
            handleRenderTeams()
        }
    }, [data])
        
    return (
        <DashboardLayout>
            <ListWithAction columns={columns} action={'CREATE_TEAM'} data={[newData] ?? []} title={t('TEAMS')} description={"إدارة الفرق"} />
        </DashboardLayout>
    )
}

export async function getStaticProps({ locale }: any) {
    const {data, status} = await Axios(`/teams?populate=*`)
    if (status === 200) {
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