import React from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import TablePagination from "@mui/material/TablePagination";
import Grid from "@mui/material/Grid";

const columns = [
    {
        id: 'reservationId',
        label: 'Reservation ID',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'reservationStartDateTime',
        label: 'Reservation Start Date and Time',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'reservationEndDateTime',
        label: 'Reservation End Date and Time',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'totalPrice',
        label: 'Total Price',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'vendorName',
        label: 'Vendor Name',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'vehicleName',
        label: 'Vehicle Name',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'pickUpLocation',
        label: 'Pick Up Location',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'dropOffLocation',
        label: 'Drop Off Location',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'viewMoreDetails',
        label: 'View More Details',
        minWidth: 100,
        align: 'center'
    }
];

function createData(reservationId, reservationStartDateTime, reservationEndDateTime, totalPrice, vendorName, vehicleName, pickUpLocation, dropOffLocation, status) {
    return {
        reservationId,
        reservationStartDateTime,
        reservationEndDateTime,
        totalPrice,
        vendorName,
        vehicleName,
        pickUpLocation,
        dropOffLocation,
        status
    };
}

const rows = [
    createData(192, "Aug 15, 2022, 1:07:56 AM", "Aug 15, 2022, 1:07:56 AM", "Aug 16, 2022, 1:07:56 AM", "Rs.3000.00", "Sarath Perera", "Suzuki Alto", "Colombo", "Galle", "PENDING"),
];

function VehicleReservationTable() {

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
        <div className="card">
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <h3>Vehicle Reservation Details</h3>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
            <hr/>
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
                                                            <Link to="/user/vehicle-reservation">
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
        </div>
    );
}

export default VehicleReservationTable;