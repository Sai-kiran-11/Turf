import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
export default function home() {
  return (
    <div className="home-container">
      <h1>Welcome to our Turf booking services</h1>
      <img src="https://img.freepik.com/free-photo/tennis-court-sunset_49043-446.jpg?size=626&ext=jpg" ></img>
        <div className="image-container">
        </div>
        <div className="info-container">
            <h4> We offer the best turfs for your sports activities. Book now!</h4>
        </div>
        <div className="button-container">
        <Link to="/turfs" className="book-button">Book Turf</Link>
      </div>

    </div>
  )
}
