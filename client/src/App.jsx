import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import HeroScrollDemo from "./pages/TopVolunteers";
import Navbar from "./components/Navbar";
import OrderMedicinePage from "./pages/OrderMedicine";
import MapboxComponent from "./pages/Map";
import OrderGroceriesPage from "./pages/OrderGroceries";
// import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (

    <>

      {/* <MapboxComponent /> */}

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <Home />
            <HeroScrollDemo href="#our-volunteers" />
            <OrderMedicinePage href="#order-medicines" />
            <OrderGroceriesPage href="#order-groceries" />
          </>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      {/* <Toaster /> */}
    </>
  )
}

export default App
