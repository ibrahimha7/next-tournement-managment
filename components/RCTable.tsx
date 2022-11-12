
import Table from 'rc-table';


interface IProps {
    data: any[]
    columns: any[]
}


export const RCTable = ({ columns, data }: IProps) => {

    return (
        <Table columns={columns} data={data} />
    )
}