import React, {useState} from "react";
import "../ConfigurationForm.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";

function AccommodationTypeForm(props) {

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
    const [typeName, setTypeName] = useState(props.typeName);
    const [image, setImage] = useState(props.image);
    const [imageBase64, setImageBase64] = useState(props.pricePerKilometer);

    const handleTypeNameChange = event => {
        setTypeName(event.target.value);
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
                        {props.action === "update" ? "Modify Accommodation Type" : "Create New Accommodation Type"}
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
                            <TextField id="typeName" label="Accommodation Type Name" type="text"
                                       value={typeName}
                                       onChange={handleTypeNameChange}/>
                            <br/><br/>
                            <h5>Accommodation Type Image</h5>
                            <Button color="success" variant="outlined" component="label">
                                {props.action === "update" ? "Change Image" : "Upload Image"}
                                <input hidden accept="image/*" multiple type="file" onChange={handleImageChange}/>
                            </Button>
                            <ImageList sx={{m: "2%", width: "96%", height: 200}} cols={2} rowHeight={1}>
                                <ImageListItem>
                                    <img
                                        src={image}
                                        // alt="Accommodation type Image"
                                        loading="lazy"
                                        width="100%"
                                    />
                                </ImageListItem>
                            </ImageList>

                        </div>
                        <CreateButton>{props.action === "update" ? "Update Accommodation Type" : "Save New Accommodation Type"}</CreateButton>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default AccommodationTypeForm;