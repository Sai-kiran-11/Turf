import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Turf.css'
// import useHook from './useHook';
// import { useState } from 'react';

export default function Turf() {
    const [turf,setTurf] = useState([]);

    useEffect (()=>{
        axios.get(`http://localhost:8080/turf/all`)
        .then(response => {
            setTurf(response.data);
        })
        console.log(turf);
    },[]);


    // const useHook = () =>{
    //     const[data, setData] = useState("")
    //     return data
    // }

  return (
    <div className="turfmain">
        <h1 style={{marginLeft : "40%"}} className='turfList'>List of all the turfs</h1>
        <div className="turf-cards">
            {turf.map(turf => ( <div className ="turf-card"  key={turf.turfId} >
                <p>Turf Id : {turf.turfId}</p>
                <h4>Turf Name : {turf.turfName}</h4>
                <h4>Location : {turf.turfLocation}</h4>
                
                <Link style={ {color : "black" , textDecoration : "none"}} to={`/sports/getall/turfid/${turf.turfId}`}><button>Select the turf</button></Link>
        
                </div>
                ))}
            {/* <button onClick={()=>useHook}>BUTTON</button> */}
        </div>
    </div>


  )
}
