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

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
      <HeroScrollDemo href="#our-volunteers"/>
      <OrderMedicinePage href="#order-medicines"/>
      <OrderGroceriesPage href="#order-groceries" />
      <MapboxComponent />
      <MyCalendar />
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}