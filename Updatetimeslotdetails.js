import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Adminmanage.css'
function Updatetimeslotdetails() {
    const [id,setId] = useState('');
    const [startTime,setstartTime] = useState('');
    const [endTime,setEndTime] = useState('');
    const [duration,setDuration] = useState('');
    const handleTimeSlot = async (e)=>{
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8080/timeslot/update/id/${id}/starttime/${startTime}/endtime/${endTime}/duration/${duration}`)
            alert("TimeSlots Details Updated Successfully")
            window.location.reload();
        }catch(error){
            console.log("Error While Updating The TimeSlot")
        }
    }
  return (
    <div className="adminmanagestyle">
        <h2>Update TimeSlot Details </h2>
        <div >
            <form onSubmit={handleTimeSlot}>
                <div>
                    <label>TimeSlot Id : </label><br></br>
                    <input type="number" value={id} onChange={(e) => setId(e.target.value)} required></input>
                </div>
                <div>
                    <label> New StartTime : </label><br></br>
                    <input type="text" value={startTime} onChange={(e) => setstartTime(e.target.value)} required></input>
                </div>
                <div>
                    <label> New EndTime : </label><br></br>
                    <input type="text" value={endTime} onChange={(e) => setEndTime(e.target.value)} required></input>
                </div>
                <div>
                    <label> New Duration : </label><br></br>
                    <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} required></input>
                </div>
                <button>Submit</button>
            </form><br></br>
            <span>Click Here To Go Back To Management DashBoard  :  </span>
            <button><Link to ="/admin/login/updateDetails" className="link" style={ {color : "black" , textDecoration : "none"}}> Dashboard </Link></button><br></br>
        </div>
    </div>
  )
}

export default Updatetimeslotdetails