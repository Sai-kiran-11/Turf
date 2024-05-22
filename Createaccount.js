import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import './Createaccount.css'
function Createaccount() {
    const {turfId,sportId,slotId} = useParams({});
    const [userName, setUserName] = useState('');
    const [email,setEmail]  = useState('');
    const [password,setPassword] = useState('');
    const [age,setAge] = useState('');
    const [error,setError] =useState('');
    const navigator = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:8080/user/post`,
            {
                userName,
                email,
                password,
                age
            });
            alert("Account Created Successfully")
            navigator(`/sports/getall/turfid/${turfId}/timeslot/getall/sportsId/${sportId}/timeslotId/${slotId}`)
        }catch(error){
            setError('An Error while posting your details please try again ...')
        }
    };

  return (
    <div className="signupform">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name : </label><br></br>
                <input type="text" value={userName} onChange = {(e) => setUserName(e.target.value)} required></input>
            </div>
            <div>
                <label>Email : </label><br></br>
                <input type="email" value= {email} onChange = {(e) => setEmail(e.target.value)} required></input>
            </div>
            <div>
                <label>Password : </label><br></br>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required></input>
            </div>
            <div>
                <label>Age : </label><br></br>
                <input type="number" value={age} onChange= {(e) => setAge(e.target.value)} required></input>
            </div><br></br>
            <button> Submit </button>
        </form>
    </div>
  )
}

export default Createaccount