import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function SingleUserForm() {
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
                    <TextField id="firstName" label="First Name" type="text" defaultValue="Diluni"/>
                    <TextField id="lastName" label="Last Name" type="text" defaultValue="Malsha"/>
                    <TextField id="nic" label="NIC / Passport" type="text" defaultValue="199960700964"/>
                    <TextField id="email" label="Email" type="email" defaultValue="diluni@gmail.com"/>
                    <TextField id="mobile" label="Mobile" type="text" defaultValue="+94706064944"/>
                    <TextField id="address" label="Address" type="text" defaultValue="Kerellowita Waththa"/>
                    <TextField id="city" label="city" type="text" defaultValue="Deniyaya"/>
                    <TextField id="province" label="province" type="text" defaultValue="Southern"/>
                    <TextField id="country" label="Country" type="text" defaultValue="Sri Lanka"/>
                </div>
            </Box>
        </div>
    )
}

export default SingleUserForm;