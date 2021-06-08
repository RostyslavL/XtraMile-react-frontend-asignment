import React , {useEffect, useState, useMemo }from 'react'
import { useTable, useSortBy } from 'react-table'
import { COLUMNS } from './Columns'
import './table.css'
import { FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa'

export const Table = () =>{

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
    },useSortBy)

    const 
        { 
            getTableProps,
            getTableBodyProps,
            headerGroups, 
            footerGroups, 
            rows, 
            prepareRow 
        } = tableInstance



    return (
        <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                        {column.isSorted ? 
                            (column.isSortedDesc ? 
                            <FaSortAmountUp/> : 
                            <FaSortAmountDown/>) : 
                        ''}
                    </span>
                </th>
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
            <tfoot>
                {
                    footerGroups.map((footerGroup) => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map((column) => (
                                <td {...column.getFooterGroupProps}>
                                    {
                                        column.render('Footer')
                                    }
                                </td>
                            ))}
                        </tr>
                    ))
                }
            </tfoot>
        </table>
    )
}

