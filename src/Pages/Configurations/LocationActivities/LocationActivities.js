import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import "../Configurations.css"
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import * as FaIcons from "react-icons/fa";
import Switch from "@mui/material/Switch";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Swal from 'sweetalert2';
import Image from '../../../Assets/Accommodations/accommodation-1.jpg';
import LocationActivityForm from "../../../Components/Configurations/LocationActivities/LocationActivityForm";
import axios from "axios";

//Table columns
const columns = [
    {
        id: 'id',
        label: 'ID',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'activityName',
        label: 'Activity Name',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'image',
        label: 'Image',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'status',
        label: 'Visibility',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'moreActions',
        label: 'More Actions',
        minWidth: 100,
        align: 'center'
    }
];

const endpointBaseURL = "http://localhost:8080/admin/activity";

function LocationActivities() {

    //Value variables
    const [id, setId] = useState(0);
    const [activityName, setActivityName] = useState("");
    const [image, setImage] = useState("");
    const [action, setAction] = useState("save");

    //Pop up form
    const [isFormOpen, setIsFormOpen] = useState(false);
    const toggleFormPopup = () => {
        setIsFormOpen(!isFormOpen);
    }

    //Button
    const StyledButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b'
        },
        width: '100%',
        marginTop: '10px'
    }));


    // Table functions

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const formatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };

    const [rows, setRows] = useState([]);
    useEffect(() => {
        getLocationActivities();
    }, []);

    const getLocationActivities = () => {
        axios.get(endpointBaseURL)
            .then(res => {
                const facilities = res.data.body;
                setRows(facilities);
            })
    }

    const handleVisibility = (id) => (event) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to change the visibility of the location activity?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: 'black',
            confirmButtonText: 'Yes, change it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const endpointURL = endpointBaseURL + "/" + id;
                axios.patch(endpointURL)
                    .then((response) => {
                        if (response.data.success) {
                            Swal.fire(
                                'Status Changed!',
                                response.data.message,
                                'success'
                            ).then(r => getLocationActivities())
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
        })
    };

    const createLocationActivity = () => {
        setId(0);
        setActivityName("");
        setImage("");
        setAction("save");
        toggleFormPopup();
    };

    const editLocationActivity = (id, activityName, image) => (action) => {
        setId(id);
        setActivityName(activityName);
        setImage(image);
        setAction("update");
        toggleFormPopup();
    };

    const deleteLocationActivity = (id) => (action) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: 'black',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const endpointURL = endpointBaseURL + "/" + id;
                axios.delete(endpointURL)
                    .then((response) => {
                        if (response.data.success) {
                            Swal.fire(
                                'Deleted!',
                                response.data.message,
                                'success'
                            ).then(r => getLocationActivities())
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
        })
    };

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Location Activities</p>
                <p className="sub-title">Configurations / Location Activities</p>
            </div>
            <div className='main-section'>
                <div className="card">
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <TextField
                                className="search-field"
                                id="location-activities-search"
                                label="Search Location Activities"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <StyledButton className="create-button" variant="contained"
                                          onClick={createLocationActivity}>Create New Location Activity</StyledButton>
                        </Grid>
                    </Grid>
                </div>
                <div className="card">
                    <Paper sx={{width: '100%', overflow: 'hidden'}}>
                        <TableContainer sx={{maxHeight: 440}}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{
                                                    minWidth: column.minWidth,
                                                    color: "#14292A",
                                                    fontWeight: "bold"
                                                }}
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
                                                                    <div className="more-action more-action-edit"
                                                                         onClick={editLocationActivity(row.id, row.activityName, row.image)}>
                                                                        <FaIcons.FaPencilRuler/>
                                                                    </div>
                                                                    <div className="more-action more-action-delete"
                                                                         onClick={deleteLocationActivity(row.id)}>
                                                                        <FaIcons.FaTrashAlt/>
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
                                                        } else if (column.label === "Image") {
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                    <img width="150px" src={value}
                                                                         alt="Location Activity Image"/>
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
                {isFormOpen && <LocationActivityForm
                    id={id} activityName={activityName} image={image}
                    action={action}
                    handleClose={toggleFormPopup}
                />}
            </div>
        </>
    );
}

export default LocationActivities;