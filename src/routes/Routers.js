import React from 'react'
import {Route, Routes,Navigate } from 'react-router-dom'
import Dashboard from "../pages/Dashboard"
import Bookings from "../pages/Bookings"
import SellCar from "../pages/SellCar"
import Settings from "../pages/Settings"
const Routers = () => {
    return ( 
<>
<Routes>
     {/* <Route path="/" element={<Navigate to="home"/>}/> */}
    <Route path="/" component={<Navigate to="dashboard" component={<Dashboard/>}/>}/>
    <Route  path="/dashboard" element={<Dashboard/>}/>
    <Route path="/bookings" element={<Bookings/>}/>
    <Route path="/sell-car" element={<SellCar/>}/>
    <Route path="/settings" element={<Settings/>}/>
</Routes>
</>
    )
}

export default Routers