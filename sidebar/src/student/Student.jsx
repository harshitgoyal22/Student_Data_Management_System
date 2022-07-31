import React, { useContext, useEffect, useState } from 'react'
import './student.css'
import { Modal, ModalBody, ModalHeader } from "reactstrap"
import { Form } from 'react-bootstrap'
import { useRef } from "react";
import Snackbar from ".././snackbar/Snackbar";
import SnackbarDelete from ".././snackbarDelete/SnackbarDelete";
import axios from "axios"

const SnackbarType = {
  success: "success",
  fail: "fail",
};

export default function Student({ student }) {

  const snackbarRef = useRef(null);
  const snackbarRef2 = useRef(null);
  const [modal, setmodal] = useState(false)
  const [modal2, setmodal2] = useState(false)
  const [selected, setSelected] = useState({ name: "", email: "", contact: "", branch: "", show: false, usn: "", gender: "" });

  const [details, setDetails] = useState({ name: "", email: "", contact: "", branch: "", show: false, usn: "", gender: "" });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(details)
    try {
      const res = await axios.post("/user/", {
        name: details.name,
        gender: details.gender,
        email: details.email,
        usn: details.usn,
        contact: details.contact,
        branch: details.branch,
      })
      console.log("Success");
      setDetails({ ...details, show: true })
    }
    catch (err) {
      console.log(err);
    }
  }

  const submitHandler2 = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("/user/" + selected._id, {
        name: details.name,
        gender: details.gender,
        email: details.email,
        usn: details.usn,
        contact: details.contact,
        branch: details.branch,
      })
      setDetails({ ...details, show: true })
    }
    catch (err) {
      console.log(err);
    }
  }

  
  return (
    <div className="student">


       <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>
          Add Student
        </ModalHeader>
        <ModalBody>
          <form onSubmit={submitHandler}>
            <div className="form-inner">
              <h2>Student Details</h2>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input required type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name}></input>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input required type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}></input>
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact:</label>
                <input required type="number" name="contact" id="contact" onChange={e => setDetails({ ...details, contact: e.target.value })} value={details.contact}></input>
              </div>
              <div className="form-group">
                <label htmlFor="branch">Branch:</label>
                <Form.Select aria-label="Default select example" id="branch" onChange={e => setDetails({ ...details, branch: e.target.value })} value={details.branch} >
                  <option >Select Branch</option>
                  <option>CSE</option>
                  <option>ECE</option>
                  <option>EEE</option>
                  <option>ENI</option>
                  
                </Form.Select>
              </div>
              <div className="form-group">
                <label htmlFor="usn">USN:</label>
                <input required type="text" name="usn" id="usn" onChange={e => setDetails({ ...details, usn: e.target.value })} value={details.usn}></input>
              </div>
              <div className="form-group">
                <label htmlFor="branch">Gender:</label>
                <Form.Select aria-label="Default select example" id="gender" onChange={e => setDetails({ ...details, gender: e.target.value })} value={details.gender} >
                  <option >Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Form.Select>
              </div>
              <input onClick={() => { snackbarRef.current.show(); }} type="submit" value="SUBMIT"></input>
              <Snackbar
                ref={snackbarRef}
                message="Details Submitted Successfully!"
                type={SnackbarType.success}
              />
              <input onClick={() => setmodal(false)} type="submit" value="CANCEL"></input>
            </div>
          </form>
        </ModalBody>
      </Modal> 
      <Modal size="lg" isOpen={modal2} toggle={() => setmodal2(!modal2)}>
                      <ModalHeader toggle={() => setmodal2(!modal2)}>
                        Edit Student
                      </ModalHeader>
                      <ModalBody>
                        <form onSubmit={submitHandler2}>
                          <div className="form-inner">
                            <h2>Student Details</h2>
                            <div className="form-group">
                              <label htmlFor="name">Name:</label>
                              <input required type="text" name="name" id="name" placeholder={selected.name} onChange={e => setDetails({ ...details, name: e.target.value })}></input>
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Email:</label>
                              <input required type="email" name="email" id="email" placeholder={selected.email} onChange={e => setDetails({ ...details, email: e.target.value })}></input>
                            </div>
                            <div className="form-group">
                              <label htmlFor="contact">Contact:</label>
                              <input required type="number" name="contact" id="contact" placeholder={selected.contact} onChange={e => setDetails({ ...details, contact: e.target.value })}></input>
                            </div>
                            <div className="form-group">
                              <label htmlFor="branch">Branch:</label>
                              <Form.Select aria-label="Default select example" id="branch" onChange={e => setDetails({ ...details, branch: e.target.value })} value={details.branch} >
                                <option >Select Branch</option>
                                <option>CSE</option>
                                <option>ECE</option>
                                <option>EEE</option>
                                <option>ENI</option>
                                
                              </Form.Select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="usn">USN:</label>
                              <input required type="text" name="usn" id="usn" placeholder={selected.usn} onChange={e => setDetails({ ...details, usn: e.target.value })}></input>
                            </div>
                            <div className="form-group">
                              <label htmlFor="branch">Gender:</label>
                              <Form.Select aria-label="Default select example" id="gender" onChange={e => setDetails({ ...details, gender: e.target.value })} value={details.gender} >
                                <option >Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                              </Form.Select>
                            </div>
                            <input onClick={() => { snackbarRef.current.show(); }} type="submit" value="SUBMIT"></input>
                            <Snackbar
                              ref={snackbarRef}
                              message="Details Submitted Successfully!"
                              type={SnackbarType.success}
                            />
                            <input onClick={() => setmodal2(false)} type="submit" value="CANCEL"></input>
                          </div>
                        </form>
                      </ModalBody>
                    </Modal>

      <button className="addButton" onClick={() => setmodal(true)}><i className="buttonIcon fa-solid fa-plus"></i> Add Student</button>
      <div>
        <center>
          <table border="4" id="show" style={{ paddingTop: "100px" }}>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Contact
              </th>
              <th>
                Branch
              </th>
              <th>
                USN
              </th>
              <th>
                Gender
              </th>
              <th>
                Action
              </th>
            </tr>
            {student.map((p) => (
              <tr value={p.usn}>
                <td>
                  <div className="det">
                    {p.name}
                  </div>
                </td>
                <td>
                  <div className="det">
                    {p.email}
                  </div>
                </td>
                <td>
                  <div className="det">
                    {p.contact}
                  </div>
                </td>
                <td>
                  <div className="det">
                    {p.branch}
                  </div>
                </td>
                <td>
                  <div className="det">
                    {p.usn}
                  </div>
                </td>
                <td>
                  <div className="det">
                    {p.gender}
                  </div>
                </td>
                <td>
                  <div className="det">
                    <i class="fa-solid fa-pen-to-square" style={{ marginRight: "10px", cursor: "pointer", color: "blue" }} onClick={e => {
                      setSelected(p);
                      setmodal2(true);
                    }}></i>

                    

                    {/* onClick={() => { snackbarRef2.current.show(); }} */}
                    {/* onClick={async () => await axios.delete("/user/" + p.usn)} */}
                    <i class="fa-solid fa-trash" style={{ cursor: "pointer", color: "red" }} onClick={() => { snackbarRef2.current.show(); }}  onClick={async () => await axios.delete("/user/" + p.usn)}></i>
                    <SnackbarDelete
                      ref={snackbarRef2}
                      message="Student Deleted Successfully!"
                      type={SnackbarType.fail}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </center>
      </div>
    </div>
  )
}