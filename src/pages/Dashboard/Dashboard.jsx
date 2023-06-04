import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { BiLogOutCircle } from 'react-icons/bi'
import "./dashboard.css"
import dashboardSvg from "./../../assets/home/dashboard-logo.svg"
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="barside">
        <div className="options">
          <div className="dashboard-head"><img src={dashboardSvg} alt="" className='dashboard-img' /> <span className='mx-3 dashboard-title'>Dashboard</span></div>
          <NavLink className=''   to='/dashboard/main'>product</NavLink>
          <NavLink className='' to='/dashboard/dashboard-feedback'>feedback</NavLink>
          <NavLink className='' to='/dashboard/dashboard-support'>support</NavLink>
        </div>
        <a href="#" className='logout'>
          <BiLogOutCircle className='mx-3' />
          <span>log out</span>
        </a>
      </div>
      <div className='dashboard-second-section'>
        <div className='dashboard-navbar'>
          <form action="" className="search-container">
            <input
              type="text"
              className="search-nav-input"
              placeholder="Search for product"
            />
            <button>Search</button>
          </form>
          <div className="dashboard-admin">

          </div>

        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard;