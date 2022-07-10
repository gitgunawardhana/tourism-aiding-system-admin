import * as React from 'react';
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
        id: 'telephone',
        label: 'Telephone',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'rating',
        label: 'Rating',
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
        id: 'numberOfPackages',
        label: 'Number Of Available Packages',
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

function createData(id, name, telephone, email, rating, ratingCount, type, numberOfPackages) {

    return {
        id,
        name,
        telephone,
        email,
        rating,
        ratingCount,
        type,
        numberOfPackages
    }
}

const rows = [
    createData(45, "Granbell Hotel Colombo", "+941154673829", "granbell@I]info.com", "9.2", "345", "HOTEL", 10),
    createData(48, "Mandarina Colombo", "+941154673829", "mandarina@I]info.com", "8.2", "704", "RESORT", 13),
    createData(98, "Talo Urbon Colombo", "+941154673829", "talo@info.com", "7.5", "113", "GUEST HOUSE", 8)
];

export default function AccommodationTable() {
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
