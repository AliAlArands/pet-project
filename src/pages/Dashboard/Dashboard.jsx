import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { BiLogOutCircle } from 'react-icons/bi'
import "./dashboard.css"
import dashboardSvg from "./../../assets/home/dashboard-logo.svg"
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="barside">
        <div className="options">
          <div className="dashboard-head"><img src={dashboardSvg} alt="" className='dashboard-img' /> <span className='mx-3 dashboard-title'>Dashboard</span></div>
          <Link className='mx-2 my-2' to='/dashboard'>product</Link>
          <Link className='mx-2 my-2' to='/dashboard/dashboard-feedback'>feedback</Link>
          <Link className='mx-2 my-2' to='/dashboard/dashboard-support'>support</Link>
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