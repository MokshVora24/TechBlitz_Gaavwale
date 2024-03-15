import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroScrollDemo from "./pages/TopVolunteers";

export default function App() {
  return (
    <BrowserRouter>
      <HeroScrollDemo />
    </BrowserRouter>
  );
}