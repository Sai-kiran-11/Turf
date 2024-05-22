import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import './Adminlogin.css';
function Createadminaccount() {

    const [name, setName] = useState('');
    const [email,setEmail]  = useState('');
    const [password,setPassword] = useState('');
    const [age,setAge] = useState('');
    const [error,setError] =useState('');
    const navigator = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:8080/admin/post`,
            {
                name,
                password,
                email
            });
            alert("Account Created Successfully")
            navigator(`/admin/login`)
        }catch(error){
            setError('An Error while posting your details please try again ...')
        }
    };

  return (
    <div className="adminstyle">
        <h1>Admin SignUp </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name : </label><br></br>
                <input type="text" value={name} onChange = {(e) => setName(e.target.value)} required></input>
            </div>
            <div>
                <label>Email : </label><br></br>
                <input type="email" value= {email} onChange = {(e) => setEmail(e.target.value)} required></input>
            </div>
            <div>
                <label>Password : </label><br></br>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required></input>
            </div><br></br>
            <button> Submit </button>
        </form>
    </div>
  )

}

export default Createadminaccount