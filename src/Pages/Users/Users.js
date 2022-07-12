import React from "react";
import UserTable from "../../Components/Users/UserTable/UserTable";
import "./Users.css"
import TextField from "@mui/material/TextField";

function Users() {
    return (
        <div className='main-section'>
            <div className="title-box">
                <p className="title">Users</p>
            </div>
            <div className="card">
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
        </div>
    )
}

export default Users