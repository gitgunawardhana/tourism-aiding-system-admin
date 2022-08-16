import React from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import "./AccommodationReservations.css";

const columns = [
    {
        id: 'roomName',
        label: 'Room Name',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'roomCount',
        label: 'Number of Reserved Rooms',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'numberOfGuests',
        label: 'Number of Guests',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'bedDetails',
        label: 'Bed',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'price',
        label: 'Price',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'discount',
        label: 'Discount',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'total',
        label: 'Total',
        minWidth: 150,
        align: 'center'
    }
];

function createData(roomName, roomCount, numberOfGuests, bedDetails, price, discount, total) {
    return {
        roomName, roomCount, numberOfGuests, bedDetails, price, discount, total
    };
}

const rows = [
    createData("Deluxe Double Room", "1", "2", "Two Single Beds", 'Rs. 6500.00', "5%", "Rs. 6175.00"),
];

function ReservationRoomTable() {
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
        <div className="reservation-room-table">
            <h4>Reservation Room Details</h4>
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
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {value}
                                                    </TableCell>
                                                );
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

export default ReservationRoomTable;