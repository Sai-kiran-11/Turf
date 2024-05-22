import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import './Createuseraccount.css'
function Createuseraccount() {
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
            navigator(`/Loginuser`)
        }catch(error){
            setError('An Error while posting your details please try again ...')
        }
    };

  return (
    <div className="usersignupform">
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

export default Createuseraccount