import React, { Fragment } from 'react'

interface IProps {
    data: any[]
    columns: any[]
}


export const Table = ({ columns, data }: IProps) => {

    return (
        <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr key={'hi'}>
                                    {columns.map((tableHead) => (
                                        <th key={tableHead.key} scope="col" className="py-3.5 pl-4 pr-3 text-start text-sm font-semibold text-gray-900 sm:pl-6">
                                            {tableHead.title}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {data.map((row) => (
                                    <Fragment key={row.id}>
                                        {row.map((cells: any) => (
                                            <tr key={cells.id}>
                                                {columns.map((col, index: number) => (
                                                    <td key={`${cells.id + index}`} className="text-right py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                        {col.type === 'avatar' ? (
                                                            <img
                                                                className="inline-block h-6 w-6 rounded-md"
                                                                src={cells[col.key]} alt={''} />
                                                        ) : cells[col.key]}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}