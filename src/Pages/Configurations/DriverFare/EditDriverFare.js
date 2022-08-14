import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import "../Configurations.css"
import Box from "@mui/material/Box";

function EditDriverFare() {

    //Value variables
    const [driverFare, setDriverFare] = useState(0);

    const handleDriverFareChange = event => {
        setDriverFare(event.target.value);
    }

    const formatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };

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

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Edit Driver Fare Per Night</p>
                <p className="sub-title">Configurations / Driver Fare / Edit Driver Fare</p>
            </div>
            <div className='main-section'>
                <div className="driver-fare-box">
                    <div className="card">
                        <div className="configuration-form-title">
                            Driver Fare Per Night
                        </div>
                    </div>

                    <div className="card">
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': {m: 0, width: '100%'},
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField id="driverFare" label="Driver Fare Peer Night" type="text"
                                           value={driverFare}
                                           onChange={handleDriverFareChange}/>
                                <br/><br/>
                            </div>
                            <CreateButton>Save Changes</CreateButton>
                        </Box>
                    </div>
                </div>

            </div>
        </>
    );
}

export default EditDriverFare;