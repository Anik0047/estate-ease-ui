import './Layout.scss'
import Navbar from "../../components/Navbar/Navbar"
import { Outlet } from 'react-router-dom'

function Layout(){
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
    
  )
}

export default Layout