import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import HeroScrollDemo from "./pages/TopVolunteers";
import Navbar from "./components/Navbar.jsx";
import OrderMedicinePage from "./pages/OrderMedicine";
import MapboxComponent from "./pages/Map";
import OrderGroceriesPage from "./pages/OrderGroceries";

import { Toaster } from "react-hot-toast";
import MyCalendar from "./pages/Calendar.jsx";
import ContactUs from "./pages/ContactUs.jsx";

// import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  return (
    <div className="bg-white">


      <BrowserRouter>

        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <Home />
            <OrderGroceriesPage href="#order-groceries" />
            <OrderMedicinePage href="#order-medicines" />
            <MyCalendar href="#request-volunteer"/>
            <HeroScrollDemo href="#our-volunteers" />
            <MapboxComponent href="#find-services"/>
            <ContactUs href="#contact-us"/>
            <Toaster position="top-center" reverseOrder={false} />
          </>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

