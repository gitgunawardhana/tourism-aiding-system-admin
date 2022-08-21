import React, {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import "../Configurations.css"
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function DriverFare() {

    //Value variables
    const [driverFare, setDriverFare] = useState(0.0);

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

    const navigate = useNavigate();

    function editDriverFare(){
        navigate("/configurations/driver-fare/edit");
    }

    useEffect(() => {
        getDriverFare();
    }, []);

    const getDriverFare = () => {
        axios.get("http://localhost:8080/admin/driver/fare-per-night")
            .then(res => {
                const response = res.data.body;
                setDriverFare(response);
            })
    }

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Driver Fare Per Night</p>
                <p className="sub-title">Configurations / Driver Fare</p>
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
                                           InputProps={{
                                               readOnly: true,
                                           }}
                                           value={driverFare}
                                           onChange={handleDriverFareChange}/>
                                <br/><br/>
                            </div>
                            <CreateButton onClick={editDriverFare}>Edit Fare</CreateButton>
                        </Box>
                    </div>
                </div>

            </div>
        </>
    );
}

export default DriverFare;