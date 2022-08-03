import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./LocationForm.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";
import {styled} from "@mui/material/styles";
import {useNavigate} from "react-router";

function ViewForm(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [longitude, setLongitude] = useState(0.0);
    const [latitude, setLatitude] = useState(0.0);
    const [description, setDescription] = useState("");
    const [minimumSpendingDays, setMinimumSpendingDays] = useState(1);
    const [provinceId, setProvinceId] = useState(0);
    const [locationPictures, setLocationPictures] = useState([]);
    const [locationPicturesBase64, setLocationPicturesBase64] = useState([]);
    const [locationActivities, setLocationActivities] = useState([]);

    const [activities, setActivities] = useState([]);
    const [provinces, setProvinces] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getLocationDetails();
        getProvinces();
    }, []);

    const getLocationDetails = () => {
        axios.get("http://localhost:8080/admin/location/" + props.id)
            .then(res => {
                const response = res.data.body;
                console.log(response);
                setId(response.id);
                setName(response.name);
                setLongitude(response.longitude);
                setLatitude(response.latitude);
                setDescription(response.description);
                setMinimumSpendingDays(response.minimumSpendingDays);
                setProvinceId(response.provinceId);
                setLocationPictures(response.locationPictures);
                setActivities(response.locationActivities);
            })
    }

    const getProvinces = () => {
        axios.get("http://localhost:8080/admin/province/names")
            .then(res => {
                const response = res.data.body;
                setProvinces(response);
            })
    }

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleImageChange = event => {
        let image = event.target.files[0];
        let url = URL.createObjectURL(image);
        let items = [];
        let itemsBase64 = [];
        {
            locationPictures.map((item) => (
                items.push(item)
            ));
            locationPicturesBase64.map((item) => (
                itemsBase64.push(item)
            ))
        }
        items.push(url);
        getBase64(image).then(
            data => itemsBase64.push(data)
        );
        setLocationPictures(items);
        setLocationPicturesBase64(itemsBase64);
    };
    const handleNameChange = event => {
        setName(event.target.value);
    }
    const handleLongitudeChange = event => {
        setLongitude(parseFloat(event.target.value));
    }
    const handleLatitudeChange = event => {
        setLatitude(parseFloat(event.target.value));
    }
    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    }
    const handleMinimumSpendingDaysChange = event => {
        setMinimumSpendingDays(parseInt(event.target.value));
    }
    const handleProvinceIdChange = event => {
        setProvinceId(event.target.value);
    }
    const handleActivitiesChange = (value) => event => {
        let items = [];
        const isFound = locationActivities.some(element => {
            const result = element === value;
            items.push(element);
            return result;
        });
        if (isFound) {
            setLocationActivities(current =>
                current.filter(element => {
                    return element !== value;
                }),
            );
        } else {
            items.push(value);
            setLocationActivities(items);
        }
    }

    const handleSubmit = event => {
        const locationActivityObjects = locationActivities.map(activity => {
            return {
                id: activity
            }
        });
        const location = {
            name: name,
            longitude: longitude,
            latitude: latitude,
            description: description,
            minimumSpendingDays: minimumSpendingDays,
            provinceId: provinceId,
            locationPictures: locationPicturesBase64,
            locationActivities: locationActivityObjects
        };

        axios.post("http://localhost:8080/admin/location", location)
            .then(res => {
                alert(res.data.message);
                navigate("/locations");
            })
    }

    const UpdateButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b',
            fontWeight: 'bold'
        },
        width: '50%',
        marginLeft: '25%',
        marginBottom: '20px'
    }));

    return (
        <>
            <div className="card">
                <h3>Basic Details</h3>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="name" label="Location Name" type="text"
                                   value={name}
                                   onChange={handleNameChange}
                                   sx={{m: 1, width: '48%'}}/>
                        <FormControl
                            sx={{m: 1, width: '48%'}}>
                            <InputLabel id="vendor-type">Province</InputLabel>
                            <Select
                                labelId="province"
                                id="province"
                                label="Province"
                                onChange={handleProvinceIdChange}
                                value={provinceId}
                            >
                                {provinces.map((item) => (
                                    <MenuItem value={item.id}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            maxRows={10}
                            value={description}
                            onChange={handleDescriptionChange}
                            sx={{m: 1, width: '97%'}}
                        />
                        <TextField
                            id="minimumDaysToSpend"
                            label="Minimum Days To Spend"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleMinimumSpendingDaysChange}
                            value={minimumSpendingDays}
                            InputProps={{inputProps: {min: 1, max: 100}}}
                            sx={{m: 1, width: '31%'}}
                        />
                        <TextField id="latitude" label="Latitude" type="text"
                                   onChange={handleLatitudeChange}
                                   value={latitude}
                                   sx={{m: 1, width: '32%'}}/>
                        <TextField id="longitude" label="Longitude" type="text"
                                   onChange={handleLongitudeChange}
                                   value={longitude}
                                   sx={{m: 1, width: '32%'}}/>
                    </div>
                </Box>
                <h3>Things to Do in this Location</h3>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <FormGroup>
                            {activities.map((item) => (
                                <FormControlLabel control={<Checkbox defaultChecked={item.checked}
                                                                     onChange={handleActivitiesChange(item.id)}/>}
                                                  label={item.activityName}/>
                            ))}
                        </FormGroup>
                    </div>
                </Box>
                <h3>Photo Gallery</h3>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <div className={props.action === "view" ? "image-upload-hidden" : "image-upload-visible"}>
                            <Button color="success" variant="outlined" component="label">
                                Upload Image
                                <input hidden accept="image/*" multiple type="file" onChange={handleImageChange}/>
                            </Button>
                        </div>
                        <ImageList sx={{m: "2%", width: "96%", height: 400}} cols={3} rowHeight={3}>
                            {locationPictures.map((item) => (
                                <ImageListItem>
                                    <img
                                        src={item}
                                        loading="lazy"
                                        alt="location image"/>
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Box>
            </div>
            <UpdateButton variant="contained" size="large">
                Update Location
            </UpdateButton>
        </>
    );
}

export default ViewForm;