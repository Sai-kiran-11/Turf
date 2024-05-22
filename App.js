// src/App.js

import React from 'react';
import Home from './components/Home';
import Turf from './components/Turf';
import Sports from './components/Sports';
import TimeSlots from './components/TimeSlots';
import Loginpage from './components/Loginpage'
import Booking from './components/Booking';
import Bookingstatus from './components/Bookingstatus'
import Createaccount from './components/Createaccount'
import Userbookings from './components/Userbookings'
import Loginuser from './components/Loginuser'
import Viewallbookings from './components/Viewallbookings'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Adminlogin from './components/Adminlogin'
import Createuseraccount from './components/Createuseraccount';
import Createadminaccount from './components/Createadminaccount'
import Updatedetails from './components/Updatedetails'
import Turfmanagement from './components/Turfmanagement'
import Postturf from './components/Postturf'
import Updateturfname from './components/Updateturfname';
import Updateturflocation from './components/Updateturflocation'
import Deleteturf from './components/Deleteturf'
import Postsports from './components/Postsports'
import Updatesportname from './components/Updatesportname'
import Updatesportpriceperhour from './components/Updatesportpriceperhour'
import Deletesport from './components/Deletesport'
import Posttimeslot from './components/Posttimeslot'
import Updatetimeslotdetails from './components/Updatetimeslotdetails'
import Deletetimeslots from './components/Deletetimeslots'
import About from './components/About'
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <><Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/turfs" element={<Turf/>}/>
      <Route path="/sports/getall/turfid/:turfId" element={<Sports/>}></Route>
      <Route path="/sports/getall/turfid/:turfId/timeslot/getall/sportsId/:sportId" element={<TimeSlots/>}></Route>
      <Route path="/sports/getall/turfid/:turfId/timeslot/getall/sportsId/:sportId/timeslotId/:slotId" element={<Loginpage />}></Route>
      <Route path="/sports/getall/turfid/:turfId/timeslot/getall/sportsId/:sportId/timeslotId/:slotId/user/userId/:userId/booking" element={<Booking />}></Route>
      <Route path="/sports/getall/turfid/:turfId/timeslot/getall/sportsId/:sportId/timeslotId/:slotId/creatingUserAccount" element={<Createaccount />}></Route>
      <Route path="/sports/getall/turfid/:turfId/timeslot/getall/sportsId/:sportId/timeslotId/:slotId/user/userId/:userId/booking/bookingStatus" element={<Bookingstatus />}></Route>
      <Route path="/Loginuser" element={<Loginuser />}></Route>
      <Route path="/Loginuser/creatingUserAccount" element={<Createuseraccount />}></Route>
      <Route path="/Loginuser/viewallbookings/:userId" element={<Viewallbookings />}></Route>
      <Route path="/Admin/Login" element = {<Adminlogin />}></Route>
      <Route path="/Admin/Login/creatingAdminAccount" element = {<Createadminaccount />}></Route>
      <Route path="/Admin/Login/updatedetails" element = {<Updatedetails />}></Route>
      <Route path="/Admin/Login/updateDetails/postturf" element={<Postturf/>}></Route>
      <Route path="/Admin/Login/updateDetails/updateturfname" element={<Updateturfname />}></Route>
      <Route path="/Admin/Login/updateDetails/updateturflocation" element={<Updateturflocation />}></Route>
      <Route path="/Admin/Login/updateDetails/deleteturf" element={<Deleteturf />}></Route>
      <Route path="/Admin/Login/updateDetails/postsports" element={<Postsports />}></Route>
      <Route path="/Admin/Login/updateDetails/updatesportname" element={<Updatesportname />}></Route>
      <Route path="/Admin/Login/updateDetails/updatesportpriceperhour" element={<Updatesportpriceperhour />}></Route>
      <Route path="/Admin/Login/updateDetails/deletesport" element={<Deletesport />}></Route>
      <Route path="/Admin/Login/updateDetails/posttimeslot" element={<Posttimeslot />}></Route>
      <Route path="/Admin/Login/updateDetails/updatetimeslotdetails" element={<Updatetimeslotdetails />}></Route>
      <Route path="/Admin/Login/updateDetails/deletetimeslot" element={<Deletetimeslots />}></Route>
      <Route path="/About" element={<About />}></Route>
    </Routes>
    </>

  );
};

export default App;


