import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Adminmanage.css'
function Updatesportname() {
    const [id,setId] = useState('');
    const [name,setName] = useState('');

    const handleSport = async (e)=>{
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8080/sports/update/name/${id}/${name}`)
            alert("Sport Name Updated Successfully")
            window.location.reload();
        }catch(error){
            console.log("Error While Updating The Sports")
        }
    }
  return (
    <div className="adminmanagestyle">
        <h2>Update Sport Name </h2>
        <div>
            <form onSubmit={handleSport}>
                <div>
                    <label>Sport Id : </label><br></br>
                    <input type="number" value={id} onChange={(e) => setId(e.target.value)} required></input>
                </div>
                <div>
                    <label>New Name : </label><br></br>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
                </div><br></br>
                <button>Submit</button>
            </form><br></br>
            <span>Click Here To Go Back To Management DashBoard  :  </span>
            <button><Link to ="/admin/login/updateDetails" className="link" style={ {color : "black" , textDecoration : "none"}}> Dashboard </Link></button><br></br>
        </div>
    </div>
  )
}

export default Updatesportname