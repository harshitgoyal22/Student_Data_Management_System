import React, { useState } from 'react'
import Side from '../side/Side';
import Toolbar from '../toolbar/Toolbar'
import './home.css'

export default function Home() {
  const style1 = {
    display: 'block'
  }

  const style2 = {
    float: "center",
    fontSize: '9pt',
    textAlign: 'center',
    width: '30%',
    marginRight: '1.6666665%',
    marginLeft: '1.6666665%',
    marginTop: '1%',
    marginBottom: '0.5em',
    borderRadius: '3%',
    boder: '2px solid green',
    textAlign:'center'
  }
  return (
    <div className="home">
      {/* <div className="title"> <h2 >BITS PILANI,HYDERABAD CAMPUS</h2></div>
       <div>
        <img src="images/college.jpg" alt='' className="logo"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facere et culpa, deleniti obcaecati esse est! Ea alias commodi totam?</p>
       </div> */}
       <div>
        <h2 style={{textAlign: "center",marginTop:"20px"}}>BITS PILANI,HYDERABAD CAMPUS</h2>
       
        <div style={style1}>
      <a href="" className="icons"><img style={style2} src="images/audi.jpg" /></a>
      <a href="" className="icons"><img style={style2} src="images/college.jpg" /></a>
      <a href="" className="icons"><img style={style2} src="images/lib.jpg" /></a>
        {/* <a href="" className="icons"><img style={style2} src="https://ucarecdn.com/209579d4-2c4e-4422-b633-5b23edd7bc99/-/crop/1600x1600/480,0/-/resize/500x500/" /></a> */}
      </div>
      
        <p style={{textAlign: "center",fontSize:"20px"}}>
        Birla Institute of Technology and Science, Pilani – Hyderabad Campus (shortened to BITS Pilani, Hyderabad Campus or BPHC) is a private deemed university campus located in Hyderabad, India. It is one of the four constituent campuses of the BITS Pilani university which has been declared as the Institute of Eminence by the Government of India. BITS Pilani opened its campus in Hyderabad upon invitation by the Government of Andhra Pradesh in 2008 with the first batch of campus graduating in 2012. It is a technical and research institute with focus on Engineering and Sciences.Since 2005, admission to the Undergraduate programmes to the Indian campuses of BITS has been offered to students based on their performance in the all-India Entrance Examination, called BITS Admission Test (BITSAT). BITS Pilani also has the policy of accepting State and National Board toppers from India. From 2015, the Institute also started accepting international students on the basis of performance in the SAT Subject Tests in Physics, Chemistry, and Math II followed by an interview. BITS does not implement any quotas during admission.
        </p>
      </div>




    </div>
  )
}
