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
    return (
        <table>
            <thread>
                <tr>
                    <th>

                    </th>
                </tr>
            </thread>
            <tbody>
                <tr>
                    <td>
                        
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default BasicTable
