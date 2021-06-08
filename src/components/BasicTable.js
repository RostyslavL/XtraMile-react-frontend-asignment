import React , {useEffect,useState, useMemo }from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './Columns'
import './table.css'

export const BasicTable = () =>{

    const [data, setData] = useState([])

    const API_KEY = 'i34nvn324gdfg5'
    const URL_ENDPOINT = `https://xtramile.azure-api.net/stats/lukaszcoding?apiSecret=${API_KEY}`
  
    useEffect(() =>{
        fetch(URL_ENDPOINT)
        .then((res) => res.json())
        .then((json) => setData(json))
      }, [URL_ENDPOINT])
    
    const columns = useMemo(() => COLUMNS, [])

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
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
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

