import React, { useEffect, useState } from 'react'
import { DashboardLayout } from '../../../components/dashboardLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ListWithAction from '../../../components/TableWithAction';
import { IUser } from '../../../interfaces';
import { useTranslation } from 'next-i18next';
import { Axios } from '../../../services/Axios';

const columns = [
    {
        title: 'الاسم',
        key: 'username',
        type: 'text' 
    },
    {
        title: 'نوع المستخدم',
        key: 'user_type',
        type: 'text' 
    },
    {
        title: 'الصورة',
        key: 'image',
        type: 'avatar'
    }
]

export default function ManagePlayers({ locale , data}: any) {
    const { t } = useTranslation()

    const [newData, setNewData] = useState<any>([])

    const handleRenderTeams = () => {
        const tempData:any[] = []
        data.map((item:any) => {
            const {id , username , user_type, image} = item || {}

            tempData.push({
                id,
                username,
                user_type,
                image: `${process.env.NEXT_BASE_URL}${image.url}`

            })

        })
        setNewData(tempData)
    }

    useEffect(() => {
        if(data.length > 0) {
            handleRenderTeams()
        }
    }, [data])
    
    

    return (
        <DashboardLayout>
            <ListWithAction columns={columns} action={'ADD_USER'} data={[newData] ?? []} title={t('USERS')} description={"إدارة المستخدمين"} />
        </DashboardLayout>
    )
}

export async function getStaticProps({ locale }: any) {
    const {data, status} = await Axios(`/users?populate=*`)
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