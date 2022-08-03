import React from "react";
import "./LocationAttraction.css";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import ViewLocationAttractionForm
    from "../../Components/LocationAttractions/LocationAttractionForm/ViewLocationAttractionForm";

function ViewLocationAttraction() {

    const CreateButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b',
            fontWeight: 'bold'
        },
        width: '50%',
        marginLeft: '25%'
    }));
    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Single Location Attraction Details</p>
                <p className="sub-title">Locations / Attractions / View Attraction</p>
            </div>
            <div className="main-section">
                <ViewLocationAttractionForm/>
            </div>
        </>
    );
}

export default ViewLocationAttraction;