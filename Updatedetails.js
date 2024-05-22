import React from 'react'
import './Updatedetails.css'

import { Link } from 'react-router-dom'
function Updatedetails() {
  return (
    <div className="detailmain">
        <h1 style={{marginLeft : "42%"}} className="detaillist">Admin DashBoard</h1>
        <h4 style={{marginLeft : "42%"}}>You can Manage all the things here</h4>
        <div className ="detailcard">
            {/* <button><Link to ="turfmanagement" className="link"> Manage Turf </Link></button>
            <button><Link to ="sportsmanagement" className="link"> Manage Sport </Link></button>
            <button><Link to ="timeslotsmanagement" className="link"> Manage TimeSlots </Link></button>
            <button><Link to ="usermanagement" className="link"> Manage User </Link></button> */}
            <div className="detailcards">
                <h2>Manage All The Turfs Here</h2>
                <span>Post New Turfs Here :</span><br></br>
                <Link to ="postturf" className="link" style={ {color : "black" , textDecoration : "none"}}> <button> Post New Turf</button></Link><br></br>
                <span>Update Turf Name Here :</span><br></br>
                <Link to ="updateturfname" className="link" style={ {color : "black" , textDecoration : "none"}}><button> Update Existing Turf Name </button></Link><br></br>
                <span>Update Turf Location Here :</span><br></br>
                <Link to ="updateturflocation" className="link" style={ {color : "black" , textDecoration : "none"}}><button>Update Existing Turf Location</button></Link><br></br>
                <span>Delete Existing Turf Here : </span><br></br>
                <Link to ="deleteturf" className="link" style={ {color : "black" , textDecoration : "none"}}> <button>Delete Existing Turf </button></Link><br></br>
            </div><br></br>
            <div className="detailcards">
                <h2>Manage All The Sports Here</h2>
                <span>Post New Sports Here :   </span><br></br>
                <Link to ="postsports" className="link" style={ {color : "black" , textDecoration : "none"}}><button> Post New Sport</button></Link><br></br>
                <span>Update Sport Name Here :   </span><br></br>
                <Link to ="updatesportname" className="link" style={ {color : "black" , textDecoration : "none"}}> <button>Update Existing Sports Name</button></Link><br></br>
                <span>Update Sport PricePerHour Here :   </span><br></br>
                <Link to ="updatesportpriceperhour" className="link" style={ {color : "black" , textDecoration : "none"}}> <button>Update Existing Sport PricePerHour </button></Link><br></br>
                <span>Delete Existing Sport Here :   </span><br></br>
                <Link to ="deletesport" className="link" style={ {color : "black" , textDecoration : "none"}}> <button>Delete Existing Sport </button></Link><br></br>
            </div><br></br>

            <div className="detailcards">
                <h2>Manage All The TimeSlots Here</h2>
                <span>Post New TimeSlot Here :   </span><br></br>
                <Link to ="posttimeslot" className="link" style={ {color : "black" , textDecoration : "none"}}><button> Post New TimeSlot </button></Link><br></br>
                <span>Update All TimeSlot Details  Here :   </span><br></br>
                <Link to ="updatetimeslotdetails" className="link" style={ {color : "black" , textDecoration : "none"}}><button> Update Existing TimeSlot Details </button></Link><br></br>
                <span>Delete Existing TimeSlot Here :   </span><br></br>
                <Link to ="deletetimeslot" className="link" style={ {color : "black" , textDecoration : "none"}}> <button>Delete Existing TimeSlot </button></Link><br></br>
            </div><br></br>

        </div>

    </div>
  )
}

export default Updatedetails