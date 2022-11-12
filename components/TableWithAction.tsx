import { useState } from "react"
import { Actions } from "./Actions"
import { Table } from "./table"


interface IProps {
    title?: string
    description?: string
    data: any[]
    columns: any[]
    action: 'ADD_USER' | 'CREATE_TEAM' | 'CRERATE_TOURNENEMT_AD'
}

export default function TableWithAction({ title, description, columns, data, action }: IProps) {

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                {(title || description) && <div className="sm:flex-auto">
                    {title && <h1 className="text-xl font-semibold text-gray-900">{title}</h1>}
                    {description && <p className="mt-2 text-sm text-gray-700">
                        {description}
                    </p>}
                </div>
                }

                <Actions action={action} />

            </div>
            <Table data={data} columns={columns} />
        </div>
    )
}


