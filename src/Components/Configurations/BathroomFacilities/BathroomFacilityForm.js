import React, {useState} from "react";
import "../ConfigurationForm.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";

function BathroomFacilityForm(props) {

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

    const [id, setId] = useState(props.id);
    const [facilityName, setFacilityName] = useState(props.facilityName);
    const [image, setImage] = useState(props.image);
    const [imageBase64, setImageBase64] = useState(props.pricePerKilometer);

    const handleFacilityNameChange = event => {
        setFacilityName(event.target.value);
    }

    const handleImageChange = event => {
        let image = event.target.files[0];
        let url = URL.createObjectURL(image);
        setImage(url);
        getBase64(image).then(
            data => setImageBase64(data)
        );
    };

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    return (
        <div className="popup-box">
            <div className="box">
                <button className="btn-close" onClick={props.handleClose}>
                    <p>+</p>
                </button>
                <div className="card">
                    <div className="configuration-form-title">
                        {props.action === "update" ? "Modify Bathroom Facility" : "Create New Bathroom Facility"}
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
                            <TextField id="facilityName" label="Bathroom Facility Name" type="text"
                                       value={facilityName}
                                       onChange={handleFacilityNameChange}/>
                            <br/><br/>
                            <h5>Bathroom Facility Image</h5>
                            <Button color="success" variant="outlined" component="label">
                                {props.action === "update" ? "Change Image" : "Upload Image"}
                                <input hidden accept="image/*" multiple type="file" onChange={handleImageChange}/>
                            </Button>
                            <ImageList sx={{m: "2%", width: "96%", height: 200}} cols={2} rowHeight={1}>
                                <ImageListItem>
                                    <img
                                        src={image}
                                        // alt="Bathroom Facility Image"
                                        loading="lazy"
                                        width="100%"
                                    />
                                </ImageListItem>
                            </ImageList>

                        </div>
                        <CreateButton>{props.action === "update" ? "Update Bathroom Facility" : "Save New Bathroom Facility"}</CreateButton>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default BathroomFacilityForm;