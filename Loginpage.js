import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css'
function Loginpage() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 
    const [error,setError] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const navigator = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
       const response= await axios.get(`http://localhost:8080/user/get/email/${email}`);
       console.log(response);
       const s = response;

    //    console.log(password);
       console.log(response.data.password);
       console.log(response.data.userId);
    //    console.log( typeof password);
    //    const exx = response.data.password;
    //    console.log(exx);
       if(response.data){
        // console.log("inside");
        if(response.data.password === password){
            // console.log("inside1");
            // console.log('User authenticated');
            // setError('');
            // setAuthenticated(true);
            
            navigator(`user/userId/${response.data.userId}/booking`)
        }else{
            setError('Invalid email or password');
            alert('Invalid password Please type correct password');
        }
       }else{
        setError('Invalid email or password');
        alert('Email is Not Present please register first')
       }
        
    } catch(error){
        console.log("Error");
    }
    //  async(e) => {
    //     e.preventDefault();
    //     const response = await axios.get(`http://localhost:8080/user/get/email/${email}`)
    //     if(response.data.exists){
    //         console.log("yes");
    //     }

    };

   return (
    <div className="register-loginpageform">
    <h2>User Login</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Email :  </label><br></br>
            <input type ="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
        </div>
        <div>
            <label>password :  </label><br></br>
            <input type="password" value={password} onChange= {(e) => setPassword(e.target.value)} required></input>
        </div><br></br>
        <button type="submit">Login</button><br></br>
        <span>Not Having a account ? Please create a account here : </span>
        <Link  style={ {color : "black" , textDecoration : "none"}} to ="creatingUserAccount"><button>Sign Up</button></Link>
    </form>

    {/* {authenticated && <Link to="/booking">Logged in Sucessfully With :</Link>} */}
    </div>
  )
}

export default Loginpage