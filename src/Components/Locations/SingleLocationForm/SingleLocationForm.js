import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./SingleLocationForm.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";

function SingleLocationForm(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [description, setDescription] = useState("");
    const [minimumSpendingDays, setMinimumSpendingDays] = useState("");
    const [provinceId, setProvinceId] = useState("");
    const [locationPictures, setLocationPictures] = useState([]);
    const [activities, setActivities] = useState([]);

    const [provinces, setProvinces] = useState([]);

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

    const handleImageChange = event => {
        let image = event.target.files[0];
        let url = URL.createObjectURL(image);
        let items = [];
        {
            locationPictures.map((item) => (
                items.push(item)
            ))
        }
        items.push(url);
        setLocationPictures(items);
    };

    return (
        <>
            <div className="location-form">
                <h3>Basic Details</h3>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="name" label="Location Name" type="text" value={name}
                                   sx={{m: 1, width: '48%'}}/>
                        <FormControl
                            sx={{m: 1, width: '48%'}}>
                            <InputLabel id="vendor-type">Province</InputLabel>
                            <Select
                                labelId="province"
                                id="province"
                                label="Province"
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
                            sx={{m: 1, width: '97%'}}
                        />
                        <TextField
                            id="minimumDaysToSpend"
                            label="Minimum Days To Spend"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={minimumSpendingDays}
                            InputProps={{inputProps: {min: 1, max: 100}}}
                            sx={{m: 1, width: '31%'}}
                        />
                        <TextField id="latitude" label="Latitude" type="text" value={latitude}
                                   sx={{m: 1, width: '32%'}}/>
                        <TextField id="longitude" label="Longitude" type="text" value={longitude}
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
                                <FormControlLabel control={<Checkbox defaultChecked={item.checked}/>} label={item.activityName}/>
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
        </>
    );
}

export default SingleLocationForm;