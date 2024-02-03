import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from './Pages/SharedLayout'
import GettingStarted from './Pages/GettingStarted'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="start" element={<GettingStarted />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
