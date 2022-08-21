import React, {useState} from "react";
import "../ConfigurationForm.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Swal from "sweetalert2";

const endpointBaseURL = "http://localhost:8080/admin/province";

function ProvinceForm(props) {

    const CreateButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b'
        },
        width: '50%',
        margin: '1%',
        marginLeft: '25%',
        color: 'white'
    }));

    const [id, setId] = useState(props.id);
    const [provinceName, setProvinceName] = useState(props.provinceName);

    const handleProvinceNameChange = event => {
        setProvinceName(event.target.value);
    }

    const saveProvince = event => {
        const data = {
            name: provinceName
        }

        axios.post(endpointBaseURL, data)
            .then(res => {
                if (res.data.success) {
                    Swal.fire(
                        'Done',
                        res.data.message,
                        'success'
                    ).then(r => window.location.reload(false))
                } else {
                    Swal.fire(
                        'Failed',
                        res.data.message,
                        'error'
                    ).then(r => {
                    })
                }
            })
            .catch(err => {
                Swal.fire(
                    'Failed',
                    'Something went wrong',
                    'error'
                ).then(r => {
                })
            })

    }

    const updateProvince = event => {
        const data = {
            id: id,
            name: provinceName
        }

        axios.put(endpointBaseURL, data)
            .then(res => {
                if (res.data.success) {
                    Swal.fire(
                        'Done',
                        res.data.message,
                        'success'
                    ).then(r => window.location.reload(false))
                } else {
                    Swal.fire(
                        'Failed',
                        res.data.message,
                        'error'
                    ).then(r => {
                    })
                }
            })
            .catch(err => {
                Swal.fire(
                    'Failed',
                    'Something went wrong',
                    'error'
                ).then(r => {
                })
            })

    }

    return (
        <div className="popup-box">
            <div className="box">
                <button className="btn-close" onClick={props.handleClose}>
                    <p>+</p>
                </button>
                <div className="card">
                    <div className="configuration-form-title">
                        {props.action === "update" ? "Modify Province" : "Create New Province"}
                    </div>
                </div>

                <div className="card">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 1, width: '98%'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField id="provinceName" label="Province Name" type="text"
                                       value={provinceName}
                                       onChange={handleProvinceNameChange}/>
                        </div>
                        <CreateButton
                            onClick={props.action === "update" ? updateProvince : saveProvince}>
                            {props.action === "update" ? "Update Province" : "Save New Province"}
                        </CreateButton>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default ProvinceForm;