import React , {useMemo }from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'

function BasicTable() {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns:columns,
        data:data,
    })

    const 
        { 
            getTableProps,
            getTableBodyProps,
            headerGroups, 
            rows, 
            prepareRow 
        } = tableInstance
    return (
        <table {...getTableProps()}>
            <thread>
                {
                    headerGroups.map((headerGroup) =>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderGroupProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thread>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row) 
                    return(
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell) =>{
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default BasicTable
