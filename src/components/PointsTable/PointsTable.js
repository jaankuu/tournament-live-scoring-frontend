import React, { useMemo, useEffect } from 'react'
import { useTable } from "react-table"
import { Columns } from "./Columns"
import "./table.css"
import { useSelector, useDispatch } from "react-redux"
import { getPoints, getPointsLoading } from '../../store/points/selectors'
import { fetchPoints } from '../../store/points/actions'

export const PointsTable = () => {
    const dispatch = useDispatch()

    const points = useSelector(getPoints)
    const pointsLoading = useSelector(getPointsLoading)

    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => points, [points])

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

    useEffect(() => {
        dispatch(fetchPoints())
      }, [dispatch])


    return (
        <>
        {pointsLoading ? "Loading.." :
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
        }
        </>
    )
}
