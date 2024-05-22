import React from 'react'
import './Bookingstatus.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function BookingStatus() {
    const {turfId,sportId,slotId,userId} = useParams({});
    const [booking,setBooking] = useState({});

  useEffect (()=>{
    axios.get(`http://localhost:8080/booking/bookingby/timeslotid/${slotId}`)
    .then(response => {
      setBooking(response.data);
    }).catch(error => {
      console.error("timeSlot id not found");
    })
 
  },[turfId,sportId,slotId,userId]);

  return (
    <>
    <div className="booking-status-container">
        <h2>Turf Booked Successfully</h2>
        <p>Your timeslot is booked for the game. Enjoy your Time </p>
    </div>
    <div className="Bookingsstatuscontainer"> 
        <span>Details Of Your Booking - </span><br></br>
        <span>Booking Status : {booking.status} </span><br/>
        <span>Booking Date : {booking.bookedDate}</span><br/>
        <span>Booking Time: {booking.bookedTime}</span><br/>
        <span>Booked Turf Id : {booking.turfId}</span><br/>
        <span>Booked Turf Name : {booking.turfName} </span><br/>
        <span>Booked Sport Id : {booking.sportId}</span><br/>
        <span>Booked Sport Name : {booking.sportName} </span><br/>
        <span>Booked Timeslot Id : {booking.timeslotId}</span><br/>
        <span>StartTime : {booking.startTime} </span><br/>
        <span>Endtime : {booking.endTime}</span><br/>
        <Link to={`/Loginuser/viewallbookings/${userId}`} style={ {color : "black" , textDecoration : "none"}}><button>Click Here To See Your Bookings</button></Link><br></br>
       <Link to ="/" style={ {color : "black" , textDecoration : "none"}}><button>Click Here To Go Home Page</button></Link>
    </div>
    </>
    

  )
}

export default BookingStatus