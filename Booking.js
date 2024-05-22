import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './Booking.css';
function Booking() {
  const {turfId,sportId,slotId,userId} = useParams({});
  const [users , setUsers] = useState({});
  const [sports,setSports] = useState({});
  const [slots,setSlots] = useState({});
  const [turfs, setTurfs] = useState({});
  const navigator = useNavigate();
  useEffect (()=>{
    axios.get(`http://localhost:8080/timeslot/${slotId}`)
    .then(response => {
      setSlots(response.data);
    }).catch(error => {
      console.error("timeSlot id not found");
    })

    axios.get(`http://localhost:8080/turf/get/${turfId}`)
    .then(response => {
      setTurfs(response.data);
    }).catch(error => {
      console.log("Turf id is not found");
    })

    axios.get(`http://localhost:8080/sports/id/${sportId}`)
    .then(response => {
      setSports(response.data)
    }).catch(error => {
      console.log("Sport id not found")
    })

    axios.get(`http://localhost:8080/user/${userId}`)
    .then(response=>{
      setUsers(response.data)
    }).catch(erroe => {
      console.log("User id is not found")
    })
 
  },[turfId,sportId,slotId,userId]);

  const handlePostRequest = () => {
    axios.post(`http://localhost:8080/booking/userId/${userId}/turfId/${turfId}/sportsId/${sportId}/timeslotId/${slotId}`)
    .then(response =>{
      console.log(response.data)
      navigator(`bookingStatus`)
    }).catch(error =>{
      console.log('Error')
    });

  }


  return (
    <div className="Booking">
      <h2 style={{marginLeft : "20%"}} className="Bookinglist">Book Your Ticket ,Your Selected turf details are present below</h2>
      <div className="Bookingcard">
        <span>Turf Name : {turfs.turfName}</span><br></br>
        <span>Turf Location : {turfs.turfLocation}</span><br></br>
        <span>Sports Name : {sports.sportName}</span><br></br>
        <span>Price Per Hour For This Sports : {sports.pricePerHour}</span><br></br>
        <span>Strating Time For Playing : {slots.startTime} </span><br></br>
        <span>End Time for Playing : {slots.endTime}</span><br></br>
        <span>Duration for Plyaing In the Turf : {slots.duration}</span><br></br>
        <span>User Id : {users.userId} </span><br></br>
        <span>User Name :{users.userName}</span><br></br>
        <br></br>
        <br></br>
        <span className="money">Total To Be Paid : {sports.pricePerHour}</span><br></br><br></br>
        <button onClick={handlePostRequest}>Book The Turf</button>
        <span></span>
      </div>
    </div>
  )
}

export default Booking
