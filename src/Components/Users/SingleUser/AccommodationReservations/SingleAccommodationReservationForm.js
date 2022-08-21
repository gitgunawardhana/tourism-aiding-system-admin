import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ReservationRoomTable from "./ReservationRoomTable";

function SingleAccommodationReservationForm() {
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
                        <TextField id="numberOfGuests" label="Number Of Guests" type="text" defaultValue="2"/>
                        <TextField id="numberOfNights" label="Number Of Nights" type="text" defaultValue="2"/>
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
                <h3>Accommodation Details</h3>
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
                        <TextField id="accommodationName" label="Accomodation Name" type="text"
                                   defaultValue="Granbell Hotel Colombo"/>
                        <TextField id="vendorName" label="Vendor Name" type="text" defaultValue="Malsha Peiris"/>
                        <TextField id="numberOfRooms" label="Number Of Rooms" type="text" defaultValue="2"/>

                        <ReservationRoomTable/>
                    </div>
                </Box>
            </div>
        </>
    )
}

export default SingleAccommodationReservationForm;