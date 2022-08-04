import React, {useState} from "react";
import "../ConfigurationForm.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

function VehicleTypeForm(props) {

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
    const [typeName, setTypeName] = useState(props.typeName);
    const [pricePerKilometer, setPricePerKilometer] = useState(props.pricePerKilometer);

    const handleTypeNameChange = event => {
        setTypeName(event.target.value);
    }

    const handlePricePerKilometerChange = event => {
        setPricePerKilometer(parseFloat(event.target.value));
    }

    return (
        <div className="popup-box">
            <div className="box">
                <button className="btn-close" onClick={props.handleClose}>
                    <p>+</p>
                </button>
                <div className="card">
                    <div className="configuration-form-title">
                        {props.action === "update" ? "Modify Vehicle Type" : "Create New Vehicle Type"}
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
                            <TextField id="typeName" label="Vehicle Type Name" type="text"
                                       value={typeName}
                                       onChange={handleTypeNameChange}/>
                            <TextField id="pricePerKilometer" label="Price Per Kilometer" type="text"
                                       value={pricePerKilometer}
                                       onChange={handlePricePerKilometerChange}/>
                        </div>
                        <CreateButton>{props.action === "update" ? "Update Vehicle Type" : "Save New Vehicle Type"}</CreateButton>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default VehicleTypeForm;