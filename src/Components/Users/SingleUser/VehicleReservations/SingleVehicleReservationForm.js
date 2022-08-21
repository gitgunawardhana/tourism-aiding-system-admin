import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function SingleVehicleReservationForm() {
    return (
        <>
            <div className="card">
                <h3>Reservation Details</h3>
                <hr/>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '48%'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="reservationId" label="Reservation ID" type="text" defaultValue="1234"/>
                        <TextField id="dateTime" label="Reservation Placed Date and Time" type="text"
                                   defaultValue="Aug 15, 2022, 1:07:56 AM"/>
                        <TextField id="reservationStartDate" label="Reservation Start Date" type="text"
                                   defaultValue="Aug 15, 2022"/>
                        <TextField id="reservationEndDate" label="Reservation End Date" type="text"
                                   defaultValue="Aug 15, 2022"/>
                        <TextField id="pickUpLocation" label="Pickup Location" type="text" defaultValue="Colombo"/>
                        <TextField id="dropOffLocation" label="Drop Off Location" type="text" defaultValue="Galle"/>
                        <TextField id="numberOfGuests" label="Number Of Guests" type="text" defaultValue="2"/>
                        <TextField id="routeLength" label="Estimated Route Length" type="text" defaultValue="300 km"/>
                        <TextField id="price" label="Total Price" type="text" defaultValue="Rs. 12000.00"/>
                        <TextField id="paymentMethod" label="Payment Method" type="text" defaultValue="ONLINE"/>
                        <TextField id="status" label="Status" type="text" defaultValue="PENDING"/>
                    </div>
                </Box>
            </div>

            <div className="card">
                <h3>User Details</h3>
                <hr/>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '48%'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="firstName" label="First Name" type="text" defaultValue="Diluni"/>
                        <TextField id="lastName" label="Last Name" type="text" defaultValue="Malsha"/>
                        <TextField id="nic" label="NIC / Passport" type="text" defaultValue="199960700964"/>
                        <TextField id="email" label="Email" type="email" defaultValue="diluni@gmail.com"/>
                        <TextField id="mobile" label="Mobile" type="text" defaultValue="+94706064944"/>
                        <TextField id="address" label="Address" type="text" defaultValue="Kerellowita Waththa"/>
                        <TextField id="city" label="city" type="text" defaultValue="Deniyaya"/>
                        <TextField id="province" label="province" type="text" defaultValue="Southern"/>
                        <TextField id="country" label="Country" type="text" defaultValue="Sri Lanka"/>
                    </div>
                </Box>
            </div>

            <div className="card">
                <h3>Vehicle Details</h3>
                <hr/>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '48%'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="vehicleName" label="Vehicle Name" type="text"
                                   defaultValue="Suzuki Alto 456"/>
                        <TextField id="vendorName" label="Vendor Name" type="text" defaultValue="Malsha Peiris"/>
                        <TextField id="vehicleType" label="Vehicle Type" type="text" defaultValue="Small"/>
                        <TextField id="pricePerDay" label="Price Per Day" type="text" defaultValue="Rs. 1500.00"/>
                        <TextField id="kilometersPerRental" label="Kilometers Per Rental" type="text" defaultValue="50km"/>
                        <TextField id="pricePerKilometer" label="Price Per Kilometer" type="text" defaultValue="Rs. 750.00"/>
                        <TextField id="vehicleLocation" label="Location" type="text" defaultValue="Galle"/>
                        <TextField id="gearType" label="Gear Type" type="text" defaultValue="Auto"/>
                        <TextField id="numberOfSeats" label="Number Of Seats" type="text" defaultValue="4"/>
                    </div>
                </Box>
            </div>

            <div className="card">
                <h3>Driver Details</h3>
                <hr/>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '48%'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="firstName" label="First Name" type="text" defaultValue="Diluni"/>
                        <TextField id="lastName" label="Last Name" type="text" defaultValue="Malsha"/>
                        <TextField id="nic" label="NIC / Passport" type="text" defaultValue="199960700964"/>
                        <TextField id="registrationNumber" label="Registration Number" type="email" defaultValue="376126"/>
                        <TextField id="mobile" label="Mobile" type="text" defaultValue="+94706064944"/>
                        <TextField id="age" label="Age" type="text" defaultValue="35 Years"/>
                        <TextField id="addressLine1" label="Address Line 1" type="text" defaultValue="Kerellowita Waththa"/>
                        <TextField id="addressLine2" label="Address Line 2" type="text" defaultValue="Moragala - Kirilipana"/>
                        <TextField id="city" label="city" type="text" defaultValue="Deniyaya"/>
                        <TextField id="province" label="province" type="text" defaultValue="Southern"/>
                        <TextField id="postalCode" label="Postal Code" type="text" defaultValue="60650"/>
                    </div>
                </Box>
            </div>
        </>
    )
}

export default SingleVehicleReservationForm;