import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import "./VehicleRentalDetails.css";

const columns = [
    {
        id: 'id',
        label: 'ID',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'name',
        label: 'Name',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'numberOfSeats',
        label: 'Number Of Seats',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'gearType',
        label: 'Gear Type',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'availability',
        label: 'Availability',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'type',
        label: 'Type',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'location',
        label: 'Location',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'viewMoreDetails',
        label: 'View More Details',
        minWidth: 100,
        align: 'center'
    },
];

function createData(id, name, numberOfSeats, gearType, availability, type, location) {

    return {
        id,
        name,
        numberOfSeats,
        gearType,
        availability,
        type,
        location
    }
}

const rows = [
    createData(23, "Suzuki Alto", 4, "MANUAL", "AVAILABLE", "SMALL", "Colombo"),
    createData(78, "Toyota Prius", 5, "MANUAL", "AVAILABLE", "LARGE", "Colombo"),
    createData(67, "Nissan March", 4, "AUTOMATIC", "NOT AVAILABLE", "MEDIUM", "Colombo"),
    createData(98, "Toyota KDH", 6, "AUTOMATIC", "AVAILABLE", "PEOPLE CARRIER", "Colombo"),
    createData(34, "Toyota Axio", 4, "AUTOMATIC", "AVAILABLE", "SMALL", "Colombo"),
];

export default function VehicleRentalTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth, color: "#14292A", fontWeight: "bold"}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            if (column.label === "View More Details") {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <Link to="#">
                                                            <FaIcons.FaEye className="view-more"/>
                                                        </Link>
                                                    </TableCell>
                                                );
                                            } else {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {value}
                                                    </TableCell>
                                                );
                                            }
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
