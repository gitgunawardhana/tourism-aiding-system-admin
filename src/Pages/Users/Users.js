import React from "react";
import UserTable from "../../Components/Users/UserTable/UserTable";
import "./Users.css"
import TextField from "@mui/material/TextField";

function Users() {

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Users</p>
                <p className="sub-title">Users</p>
            </div>
            <div className='main-section'>
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
        </>
    )
}

export default Users