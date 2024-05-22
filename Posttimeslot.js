import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Adminmanage.css'
function Posttimeslot() {
    const [startTime,setStartTime ] = useState('');
    const [endTime,setEndTime] = useState('');
    const [availiability,setAvailiability] = useState('');
    const [duration, setDuration] = useState('');
    const [sportId,setSportId] = useState('');

    const handleTimeslot = async (e) =>{
        e.preventDefault();
        try{
            await axios.post(`http://localhost:8080/timeslot/post`,{
                startTime,
                endTime,
                availiability,
                duration,
                sports : {
                sportId
                }
            })
            alert("New TimeSlot Added Successfully")
            window.location.reload();
        }catch(error) {
            console.log("Error While Posting TimeSlot Data")
        }
    }


  return (
    <div className="adminmanagestyle">
        <h2>Add New TimeSlots </h2>
        <form onSubmit={handleTimeslot}>
            <div>
                <label> Enter startTime : </label><br></br>
                <input type="text" value ={startTime}  required onChange={ (e) => setStartTime(e.target.value)}></input>
                </div>
                <div>
                <label> Enter EndTime : </label><br></br>
                <input type="text" value={endTime} required onChange= {((e) => setEndTime(e.target.value))}></input>
                </div>
                <div>
                <label> Availiability : </label>
                <input type="radio" name ="availiability" value="true" checked= {availiability === true}  onChange= {(e) => {setAvailiability(e.target.value === 'true')}} />True
                {/* <input type="radio" name ="availiability" value="false" checked= {availiability === false}  onChange= {(e) => {setAvailiability(e.target.value === 'false')}}/>False */}
                </div>
                <div>
                <label> Duration : </label><br></br>
                <input type="text" value={duration} required onChange= {((e) => setDuration(e.target.value))}></input>
                </div>
                <div>
                <label>Sport Id : </label><br></br>
                 <input type="number" value= {sportId} onChange={(e) => setSportId(e.target.value)} required></input>
                </div><br></br>
                <button> Submit </button>
        </form><br></br>
        <span>Click Here To Go Back To Management DashBoard  :  </span>
        <button><Link to ="/admin/login/updateDetails" className="link" style={ {color : "black" , textDecoration : "none"}}> Dashboard </Link></button><br></br>
    </div>
  )
}

export default Posttimeslot