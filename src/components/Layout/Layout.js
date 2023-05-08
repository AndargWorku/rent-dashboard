import React from 'react'
import Routers from "../../routes/Routers"
import Sidebar from "../Sidebar/Sidebar"
import TopNav from "../TopNav/TopNav"
const Layout = () => {
  return (
    <div className="layout">
      <Sidebar/>
      <div className="main_layout">
        <TopNav/>
      </div>
      
      <div className="content">
        <Routers/>
      </div>
      
    </div>
  )
}

export default Layout
