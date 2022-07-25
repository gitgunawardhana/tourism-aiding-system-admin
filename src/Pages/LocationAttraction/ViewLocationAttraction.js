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
        <div className="main-section">
            <div className="title-box">
                <p className="title">View Location Attraction</p>
            </div>
            <div className="card">
                <ViewLocationAttractionForm/>
            </div>
        </div>
    );
}

export default ViewLocationAttraction;