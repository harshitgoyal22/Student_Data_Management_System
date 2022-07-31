import React from 'react'
import './back.css'

export default function Back({sidebar, closeSidebar}) {
  return (
    <div className={sidebar?"back back-open":"back"} onClick={closeSidebar}></div>
  )
}
