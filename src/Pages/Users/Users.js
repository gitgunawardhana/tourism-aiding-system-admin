import React from "react";
import UserTable from "../../Components/Users/UserTable/UserTable";
import "./Users.css"
import TextField from "@mui/material/TextField";

function Users() {
    return (
        <div className='user-section'>
            <p className="user-label">Users</p>
            <hr/>
            <TextField
                className="user-search-field"
                margin="normal"
                id="user-search"
                label="Search Users"
                variant="outlined"
            />
            <div className="user-table">
                <UserTable/>
            </div>
        </div>
    )
}

export default Users