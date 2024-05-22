import React from 'react';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';
import './Sports.css'
function Sports() {
    const [sports ,setSports]  = useState([]);
    const { turfId } = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8080/sports/getall/turfid/${turfId}`)
        .then(response => {
            setSports(response.data);
        })
        .catch(error => {
            console.error('Error in Fetching the sports by turf id', error);
        });
    },[turfId]);
  return (
    <div className="sportsmain">
        <h1 className="sportList">Available Sports For Selected turf</h1>
        <div className ="sports-cards">
            {sports.map(sport => ( <div className = "sports-card" key={sport.sportId}>
                <p>Sports Id : {sport.sportId}</p>
                <h3>Sports Name : {sport.sportName}</h3>
                <h3>Price Per Hour : {sport.pricePerHour}</h3>
                <Link  style={ {color : "black" , textDecoration : "none"}} to={ `timeslot/getall/sportsId/${sport.sportId}`}><button>Select the Sport</button></Link>
            </div>))}
        </div>
    </div>
  )
}

export default Sports