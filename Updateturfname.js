import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Adminmanage.css'
function Updateturfname() {
    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const handleTurf = async(e)=>{
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8080/turf/update/id/${id}/name/${name}`)
            alert("Turf Name Updated successfully ")
            window.location.reload();
        }catch(error){
            console.log("Error while updating the turf name");
        }
        
    }
  return (
    <div className="adminmanagestyle">
        <h2>Update Turf By Name Here</h2>
        <div>
            <form onSubmit={handleTurf}>
                <div>
                    <label> Turf Id : </label><br></br>
                    <input type="number" value={id} onChange={ (e)=> setId(e.target.value)} required></input>
                </div>
                <div>
                    <label> New Turf Name : </label><br></br>
                    <input type="text" value={name} onChange= {(e)=> setName(e.target.value)} required></input>
                </div><br></br>
                <button>Submit</button>
            </form>
        </div><br></br>
        <span>Click Here To Go Back To Management DashBoard  :  </span>
        <button><Link to ="/admin/login/updateDetails" className="link" style={ {color : "black" , textDecoration : "none"}}> Dashboard </Link></button><br></br>
    </div>
  )
}

export default Updateturfname