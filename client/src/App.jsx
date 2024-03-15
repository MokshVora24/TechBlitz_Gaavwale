import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import HeroScrollDemo from "./pages/TopVolunteers";
import Navbar from "./components/Navbar";
import OrderMedicinePage from "./pages/OrderMedicine";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
      <HeroScrollDemo href="#our-volunteers"/>
      <OrderMedicinePage href="#order-medicines"/>
    </BrowserRouter>
  );
}