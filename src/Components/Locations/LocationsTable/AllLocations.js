import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./AllLocations.css";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import * as FaIcons from "react-icons/fa";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Switch from '@mui/material/Switch';
import axios from "axios";
import Swal from "sweetalert2";

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
        id: 'provinceName',
        label: 'Province',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'minimumSpendingDays',
        label: 'Minimum Days To Spend',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'numberOfAttractions',
        label: 'Number Of Attractions',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'numberOfActivities',
        label: 'Number Of Activities',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'modifiedDateTime',
        label: 'Last Modified Date Time',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'visibilityStatus',
        label: 'Visibility',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'moreActions',
        label: 'More Actions',
        minWidth: 100,
        align: 'center'
    },

];

const token = JSON.parse(sessionStorage.getItem('token'));
const config = {
    headers: {Authorization: `Bearer ` + token}
};

function AllLocations() {

    const navigate = useNavigate();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getLocations();
    }, []);

    const navigateToNewLocation = () => {
        navigate('/location/new');
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const getLocations = () => {
        axios.get("http://localhost:8080/admin/location", {
            headers: {Authorization: `Bearer ` + token},
            params: {
                "text": searchText
            }
        })
            .then(res => {
                const locations = res.data.body;
                setRows(locations);
            })
    }

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    }

    const viewLocation = (id) => (action) => {
        navigate("/location/view/" + id);
    };

    const editLocation = (id) => (action) => {
        navigate("/location/edit/" + id);
    };

    const handleVisibility = (id) => (event) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to change the visibility of the location?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: 'black',
            confirmButtonText: 'Yes, change it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const baseURL = "http://localhost:8080/admin/location/" + id;
                axios.patch(baseURL, config)
                    .then((response) => {
                        if (response.data.success) {
                            Swal.fire(
                                'Status Changed!',
                                response.data.message,
                                'success'
                            ).then(r => getLocations())
                        } else {
                            Swal.fire(
                                'Failed',
                                response.data.message,
                                'error'
                            ).then(r => {
                            })
                        }
                    });
            }
        }).catch(err => {
            Swal.fire(
                'Failed',
                'Something went wrong',
                'error'
            ).then(r => {
            })
        })
    };

    const StyledButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b'
        },
        width: '100%'
    }));

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <TextField
                        className="location-search-field"
                        id="location-search"
                        label="Search Locations"
                        variant="outlined"
                        value={searchText}
                        onKeyUp={getLocations}
                        onChange={handleSearchTextChange}
                    />
                </Grid>
                <Grid item xs={3}>
                    <StyledButton className="add-new-location-button" variant="contained"
                                  onClick={navigateToNewLocation}>Add New Location</StyledButton>
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
                                                if (column.label === "More Actions") {
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            <div className="more-action more-action-view"
                                                                 onClick={viewLocation(row.id)}>
                                                                <FaIcons.FaEye/>
                                                            </div>
                                                            <div className="more-action more-action-edit"
                                                                 onClick={editLocation(row.id)}>
                                                                <FaIcons.FaPencilRuler/>
                                                            </div>
                                                        </TableCell>
                                                    );
                                                } else if (column.label === "Visibility") {
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            <Switch
                                                                checked={value === "VISIBLE"}
                                                                onChange={handleVisibility(row.id)}
                                                                inputProps={{'aria-label': 'controlled'}}
                                                            />
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
        </>
    );
}

export default AllLocations;