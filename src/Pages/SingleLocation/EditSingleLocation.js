import React from "react";
import "./SingleLocation.css";
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import SingleLocationForm from "../../Components/Locations/SingleLocationForm/SingleLocationForm";
import {useParams} from "react-router";

function EditSingleLocation() {

    let id = useParams().id;

    const UpdateButton = styled(Button)(({theme}) => ({
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
                <p className="title">Edit Location Details</p>
            </div>
            <div className="card">
                <SingleLocationForm id={id}/>
                <UpdateButton variant="contained" size="large">
                    Update Location
                </UpdateButton>
            </div>
        </div>
    );
}

export default EditSingleLocation;