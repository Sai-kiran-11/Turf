import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Adminmanage.css'
function Postturf() {
    const [turfLocation,setTurfLocation] = useState('');
    const [turfName,setTurfName] = useState('');
    const handleTurf = async (e)=>{
        e.preventDefault();
        try{
            await axios.post(`http://localhost:8080/turf/post`,{
                turfLocation,
                turfName
            })
            alert("New Turf Added Successfully")
            window.location.reload();
        }catch(error){
            console.log("Error While Posting The Turf ")
        }

    }
  return (
    <div className="adminmanagestyle">
        <h2>Add new Turf</h2>
        <form onSubmit={handleTurf}>
            <div>
                <label> Enter Turf Name : </label><br></br>
                <input type="text" value ={turfName}  required onChange={ (e) => setTurfName(e.target.value)}></input>
                </div>
                <div>
                <label> Enter Turf Location : </label><br></br>
                <input type="text" value={turfLocation} required onChange= {((e) => setTurfLocation(e.target.value))}></input>
                </div><br></br>
                <button> Submit </button>
        </form><br></br>
        <span>Click Here To Go Back To Management DashBoard  :  </span>
        <button><Link to ="/admin/login/updateDetails" className="link" style={ {color : "black" , textDecoration : "none"}}> Dashboard </Link></button><br></br>
    </div>
  )
}

export default Postturf