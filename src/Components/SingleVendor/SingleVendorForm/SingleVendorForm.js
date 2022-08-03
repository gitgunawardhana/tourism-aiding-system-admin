import React from "react";
import "./SingleVendorForm.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';

const SingleVendorForm = props => {
    return (
        <div className="card">
            <h3>Basic Details</h3>
            <hr/>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '48%'},
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField id="username" label="UserName" type="text" defaultValue="Dilu"/>
                    <TextField id="firstName" label="First Name" type="text" defaultValue="Diluni"/>
                    <TextField id="lastName" label="Last Name" type="text" defaultValue="Malsha"/>
                    <TextField id="nic" label="NIC / Passport" type="text" defaultValue="199960700964"/>
                    <TextField id="email" label="Email" type="email" defaultValue="diluni@gmail.com"/>
                    <TextField id="mobile" label="Mobile" type="text" defaultValue="+94706064944"/>
                    <TextField id="addressLine1" label="addressLine1" type="text" defaultValue="Kerellowita Waththa"/>
                    <TextField id="addressLine2" label="addressLine2" type="text" defaultValue="Moragala - Kirilipana"/>
                    <TextField id="city" label="city" type="text" defaultValue="Deniyaya"/>
                    <TextField id="province" label="province" type="text" defaultValue="Southern"/>
                    <TextField id="postalCode" label="postalCode" type="text" defaultValue="60655"/>
                    <FormControl
                        sx={{m: 1, width: '48%'}}>
                        <InputLabel id="vendor-type">Type</InputLabel>
                        <Select
                            labelId="vendor-type"
                            id="type"
                            label="Type"
                            defaultValue={30}
                        >
                            <MenuItem value={10}>ACCOMMODATION</MenuItem>
                            <MenuItem value={20}>VEHICLE</MenuItem>
                            <MenuItem value={30}>ACCOMMODATION & VEHICLE</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </Box>
        </div>
    )
}

export default SingleVendorForm;