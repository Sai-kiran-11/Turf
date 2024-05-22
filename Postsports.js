import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Adminmanage.css'
function Postsports() {
    const [sportName,setSportName] = useState('');
    const [pricePerHour,setPricePerHour] = useState('');
    const [turfId,setTurfId] = useState('')

    const handleSport = async (e) =>{
        e.preventDefault();
        try{
            await axios.post(`http://localhost:8080/sports/post`,{
                sportName,
                pricePerHour,
                turf : {
                turfId
                }
            })
            alert("New Sport Added Successfully")
            window.location.reload();
        }catch(error) {
            console.log("Error While Posting Sport Data")
        }
    }

  return (
    <div className="adminmanagestyle">
       <h2>Add New Sport</h2>
       <form onSubmit={handleSport}>
        <div>
            <label>Sport Name : </label><br></br>
            <input type="text" value={sportName} onChange ={(e) => setSportName(e.target.value)} required></input>
        </div>
        <div>
            <label>Price Per Hour : </label><br></br>
            <input type="number" value= {pricePerHour} onChange={(e) => setPricePerHour(e.target.value)} required></input>
        </div>
        <div>
            <label>Turf Id : </label><br></br>
            <input type="number" value= {turfId} onChange={(e) => setTurfId(e.target.value)} required></input>
        </div><br></br>
        <button>Submit</button>
       </form><br></br>
       <span>Click Here To Go Back To Management DashBoard  :  </span>
        <button><Link to ="/admin/login/updateDetails" className="link" style={ {color : "black" , textDecoration : "none"}}> Dashboard </Link></button><br></br>
        </div>
  )
}

export default Postsports