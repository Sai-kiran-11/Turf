import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Viewallbookings.css'
function Viewallbookings() {
    const [booking,setBooking] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const {userId} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8080/booking/userId/${userId}`)
        .then(response => {
            setBooking(response.data);
            console.log(response.data);
        })
    },[userId]);
    const handleDelete = (id)=>{
        console.log(id);
        axios.delete(`http://localhost:8080/booking/delete/${id}`)
        .then(response => {
            console.log(response.data);
            window.location.reload();
        })
    }
  return (
    <div className="allbookingmain">
        <h1 className="bookingheading"> Booking History </h1>
        <div className="allbookingcards">
        { booking.length> 0 ? ( 
            booking.map( (booking,index) => (
                <div className="allbookingcard" key={index}>
                    <div className="card-body">
                    <h2>Booking : {index +1}</h2>
                    <span> Booking Id : {booking.id}</span><br></br>
                    <span> Status of Booking : {booking.status}</span><br></br>
                    <span> Start Time : {booking.startTime}</span><br></br>
                    <span>End Time : {booking.endTime}</span><br></br>
                    <span>Booked Time : {booking.bookedTime}</span><br></br>
                    <span>Booked Date : {booking.bookedDate}</span><br></br>
                    <span>Turf Name : {booking.turfName}</span><br></br>
                    <span>Turf Location : {booking.turfId}</span><br></br>
                    <span>Sports Name : {booking.sportName}</span><br></br>

                    <span>User Id : {booking.userId} </span><br></br>
                    <button className="danger" onClick={ () => setShowConfirmation(true)}>Cancel This Booking</button>
                    {showConfirmation && (
                        <div className="modal">

                                <div className = "modal-content">
                                    <p>Are you sure you want to Cancel The Ticket</p>
                                    <button className="danger" onClick={() => handleDelete(booking.id)}> Yes</button>
                                    <button className="yellow" onClick={() => setShowConfirmation(false)}>No</button>
                                    </div>
                                </div>
                    )}
                    </div> 
                    {/* <button> <Link to ="" style={ {color : "black" , textDecoration : "none"}}>Cancel This Booking</Link></button> */}

                    <br></br>
                    </div>
                    
            
                ))
           ) : (
            <p> User Doesnt Book Any Turf . Please Book One Turf To Check the Booked Turfs</p>
           )
           
           }
        </div>
        <Link to ="/" style={ {color : "black" , textDecoration : "none"}}><button style={{ marginLeft : "42%"}}>Click Here To Go Home Page</button></Link>
    </div>
    
  )
}

export default Viewallbookings
