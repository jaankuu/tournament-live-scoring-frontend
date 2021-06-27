import React, { useMemo } from 'react'
import { useTable } from "react-table"
import { Columns } from "./Columns"
import "./table.css"
import { getEventDetails } from "../../store/eventDetails/selectors"
import { useSelector } from "react-redux"

export const Table = () => {

    const scoresForEvent = useSelector(getEventDetails).scores

    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => scoresForEvent, [scoresForEvent])

    const tableInstance = useTable({
        columns,
        data,
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
       <table {...getTableProps()} id="table">
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
               {rows.map(row => {
                   prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                })}
                        </tr>
                    )
                })}
           </tbody>
       </table>
    )
}
