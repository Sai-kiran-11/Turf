import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Adminmanage.css'
function Updatesportpriceperhour() {
    const [id,setId] = useState('');
    const [pricePerHour,setpricePerHour] = useState('');

    const handleSport = async (e)=>{
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8080/sports/update/PricePerHour/${id}/${pricePerHour}`)
            alert("Sport pricePerHour Updated Successfully")
            window.location.reload();
        }catch(error){
            console.log("Error While Updating The Sports")
        }
    }
  return (
    <div className="adminmanagestyle">
        <h2>Update Sport pricePerHour </h2>
        <div>
            <form onSubmit={handleSport}>
                <div>
                    <label>Sport Id : </label><br></br>
                    <input type="number" value={id} onChange={(e) => setId(e.target.value)} required></input>
                </div>
                <div>
                    <label>New pricePerHour : </label><br></br>
                    <input type="text" value={pricePerHour} onChange={(e) => setpricePerHour(e.target.value)} required></input>
                </div><br></br>
                <button>Submit</button>
            </form><br></br>
            <span>Click Here To Go Back To Management DashBoard  :  </span>
            <button><Link to ="/admin/login/updateDetails" classpricePerHour="link" style={ {color : "black" , textDecoration : "none"}}> Dashboard </Link></button><br></br>
        </div>
    </div>
  )
}

export default Updatesportpriceperhour