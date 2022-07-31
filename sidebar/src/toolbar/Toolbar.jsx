import React from 'react'
import './toolbar.css'

export default function Toolbar({openSidebar}) {
  return (
    <div className="toolbar">
      <i className="toolbarIcon fa-solid fa-bars" onClick={openSidebar}></i>
      <div className="toolbarTitle">Welcome !</div>
    </div>
  )
}
