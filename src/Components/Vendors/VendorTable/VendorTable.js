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
        id: 'username',
        label: 'Username',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'firstName',
        label: 'First Name',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'lastName',
        label: 'Last Name',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'nic',
        label: 'NIC / Passport',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'mobile',
        label: 'Mobile',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'type',
        label: 'Type',
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

function createData(id, username, firstName, lastName, nic, email, mobile, type,) {
    return {
        id,
        username,
        firstName,
        lastName,
        nic,
        email,
        mobile,
        type,
    };
}

const rows = [
    createData(192, "Diluni", "Diluni", "Malsha", "199960700964", "diluni@gmail.com", "+94716064944", "ACCOMMODATION"),
    createData(193, "Sanidu", "Sanidu", "Hasanka", "199860700964", "sanidu@gmail.com", "+94719064944", "ACCOMMODATION"),
    createData(194, "Ishan", "Ishan", "Tharindu", "199860700924", "ishan@gmail.com", "+94715751121", "ACCOMMODATION"),
    createData(200, "Subhashi", "Subhashi", "Sudharma", "199705792924", "subha@gmail.com", "+94717141520", "ACCOMMODATION"),
    createData(196, "Sandika", "Sandika", "Dassanayaka", "199712700924", "sandika@gmail.com", "+94711672789", "ACCOMMODATION"),
    createData(197, "Yasmi", "Yasmi", "Navodya", "199806920924", "yasmi@gmail.com", "+94775341619", "ACCOMMODATION"),
    createData(198, "Yureni", "Yureni", "Vidunika", "199805700924", "yureni@gmail.com", "+94712417816", "ACCOMMODATION"),
    createData(199, "Ishara", "Ishara", "Madhuwanthi", "199892286924", "ishara@gmail.com", "+94771504857", "ACCOMMODATION"),
];

export default function StickyHeadTable() {
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
                                    style={{minWidth: column.minWidth}}
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
                                                        <Link to="/vendor">
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
