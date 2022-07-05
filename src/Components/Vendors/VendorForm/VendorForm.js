import React from "react";
import "./VendorForm.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';

const VendorForm = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <button className="btn-close" onClick={props.handleClose}>
                    <p>+</p>
                </button>
                <h3>Add New Vendor</h3>
                <hr/>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '50ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="username" label="UserName" type="text"/>
                        <TextField id="firstName" label="First Name" type="text"/>
                        <TextField id="lastName" label="Last Name" type="text"/>
                        <TextField id="nic" label="NIC / Passport" type="text"/>
                        <TextField id="email" label="Email" type="email"/>
                        <TextField id="mobile" label="Mobile" type="text"/>
                        <TextField id="addressLine1" label="addressLine1" type="text"/>
                        <TextField id="addressLine2" label="addressLine2" type="text"/>
                        <TextField id="city" label="city" type="text"/>
                        <TextField id="province" label="province" type="text"/>
                        <TextField id="postalCode" label="postalCode" type="text"/>
                        <FormControl
                            sx={{ m: 1, width: '50ch' }}>
                            <InputLabel id="vendor-type">Type</InputLabel>
                            <Select
                                labelId="vendor-type"
                                id="type"
                                // value={age}
                                label="Type"
                                // onChange={handleChange}
                            >
                                <MenuItem value={10}>ACCOMMODATION</MenuItem>
                                <MenuItem value={20}>VEHICLE</MenuItem>
                                <MenuItem value={30}>BOTH</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default VendorForm;