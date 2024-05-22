import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './Timeslots.css'

function TimeSlots() {
    const [timeslots, setTimeslots] = useState([]);
    const { turfId, sportId}  = useParams();

    useEffect(()=> {
        axios.get(`http://localhost:8080/timeslot/getall/sportsId/${sportId}`)
        .then(response => {
            setTimeslots(response.data);
            console.log(response)
            console.log(sportId)
        }).catch(error => {
            console.error('Error by id');
        })
    },[sportId]);
  return (
    <div className="timeslotmain">
        <h1 className="timeslotList">TimeSlots for selected sport </h1>
        <div className="timeslot-cards">
            {timeslots.map( timeslot => (
            <div className="timeslot-card"  key = {timeslot.slotsId} >
                <span> Strat Time is : {timeslot.startTime}</span><br></br>
                <span> End Time is : {timeslot.endTime}</span><br></br>
                <span>Duration : {timeslot.duration}</span><br></br>
                <h3> Availablility  : {timeslot.availiability ? "Available":"NotAvailable"}</h3><br></br>
                {/* {timeslot.availiability && (<button><Link to={`timeslotId/${timeslot.slotsId}`}>Book the timeSlot</Link></button>)} */}
                {timeslot.availiability ? (<Link style={ {color : "black" , textDecoration : "none"}}to={`timeslotId/${timeslot.slotsId}`}><button>Book the timeSlot</button></Link>) : (<button onClick={ () => alert("Not available for booking. The selected timeslot is already booked . please choose another timeSlot")}>Not available</button>)}
                </div>
                ))}
        </div>
    </div>

    
  );
}

export default TimeSlots