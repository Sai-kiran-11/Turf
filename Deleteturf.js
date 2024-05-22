import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Adminmanage.css'
function Deleteturf() {
    const [id,setId] = useState('');
    const handleDeletion =async (e) => {
        e.preventDefault();
        try{
        axios.delete(`http://localhost:8080/turf/delete/${id}`)
        alert("Turf Deleted Successfully")
        window.location.reload();
        }catch(error){
            console.log("Error While Deleting The Turf")
        }
    }
  return (
    <div className="adminmanagestyle">
        <h2> Delete Turf </h2>
        <form onSubmit={handleDeletion}>
            <div>
                <label>Id For Turf Deletion</label><br></br>
                <input type="number" value={id} onChange={ (e) => setId(e.target.value)} required></input>
            </div><br></br>
            <button>Submit </button>
        </form><br></br>
        <span>Click Here To Go Back To Management DashBoard  :  </span>
            <button><Link to ="/admin/login/updateDetails" className="link" style={ {color : "black" , textDecoration : "none"}}> Dashboard </Link></button><br></br>
    </div>
  )
}

export default Deleteturf