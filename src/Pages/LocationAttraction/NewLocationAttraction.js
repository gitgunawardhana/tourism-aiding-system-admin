import React, {useEffect, useState} from "react";
import "./LocationAttraction.css";
import NewLocationAttractionForm
    from "../../Components/LocationAttractions/LocationAttractionForm/NewLocationAttractionForm";
import {useParams} from "react-router";
import TextField from "@mui/material/TextField";
import axios from "axios";

function NewLocationAttraction() {
    let locationId = useParams().locationId;

    const [locationName, setLocationName] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/admin/location/name/" + locationId)
            .then(res => {
                setLocationName(res.data.body)
            })
    }, []);

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Add New Location Attraction</p>
                <p className="sub-title">Locations / Attractions / Create Attraction</p>
            </div>
            <div className="main-section">
                <div className="card">
                    <TextField
                        id="locationName"
                        label="Location Name"
                        type="text"
                        value={locationName}
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={{m: 1, width: '97%'}}/>
                </div>
                <NewLocationAttractionForm locationId={locationId}/>
            </div>
        </>
    );
}

export default NewLocationAttraction;