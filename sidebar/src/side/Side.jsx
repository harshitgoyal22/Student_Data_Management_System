import React from 'react'
import { Link } from 'react-router-dom'
import About from '../about/About'
import Contact from '../contact/Contact'
import Home from '../home/Home'
import Student from '../student/Student'
import './side.css'

export default function Side({sidebar}) {
  return (
      <div className={sidebar?"sidebar sidebar-open":"sidebar"}>
        <Link to="/home"><li>Home<i className="sidebarIcon fa-solid fa-house"></i></li></Link>
        <Link to="/student"><li>Student<i className="sidebarIcon fa-solid fa-pen"></i></li></Link>
        <Link to="/contact"><li>Contact Us<i className="sidebarIcon fa-solid fa-mobile"></i></li></Link>
        <Link to="/about"><li>About<i className="sidebarIcon fa-solid fa-desktop"></i></li></Link>
      </div>
  )
}
