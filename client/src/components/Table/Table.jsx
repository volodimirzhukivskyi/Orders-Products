import React from 'react'
import styles from "./Table.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import BTable from 'react-bootstrap/Table';

import {useTable} from 'react-table'
import {ListGroup} from "react-bootstrap";

function Table({style,amountInUsd, actions, columns, data}) {
    const {getTableProps, rows, prepareRow} = useTable({
        columns,
        data,
    })

    return (
        <div className={styles.table__wrapper} style={style}>
            {actions}
            <BTable style={{margin: 0,...style}} className={styles.table} striped bordered hover size="sm" {...getTableProps()}>
                <tbody>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr className={styles.tr} {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                const getJsxElement = (cell) => {
                                    const id = cell.column.id;
                                    switch (true) {
                                        case id === 'url':
                                            return <img src={cell.value} style={{width: '110px', height: '110px'}}
                                                        alt="Image"/>
                                        case id === 'date' || id === 'product_date':
                                            return <ListGroup className={styles.tableList}>
                                                <ListGroup.Item
                                                    className={styles.tableList__item}><strong>from</strong> {cell.value["start_date"]}
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    className={styles.tableList__item}><strong>to</strong> {cell.value["end_date"]}
                                                </ListGroup.Item></ListGroup>
                                        case id === 'amount_in_hryvnia' || id === 'product_amount':
                                            return <ListGroup className={styles.tableList}><ListGroup.Item
                                                className={styles.tableList__item}>{cell.value} <strong>UAH</strong>
                                            </ListGroup.Item>
                                                <ListGroup.Item className={styles.tableList__item}> {amountInUsd}
                                                    <strong>$</strong> </ListGroup.Item></ListGroup>
                                        default:
                                            return cell.render('Cell')
                                    }
                                }
                                return (
                                    <td style={{boxShadow: "none"}} className={styles.td} {...cell.getCellProps()}>
                                        {getJsxElement(cell)}
                                    </td>

                                )
                            })}
                        </tr>
                    )
                })}

                </tbody>
            </BTable></div>
    )
}

export default Table