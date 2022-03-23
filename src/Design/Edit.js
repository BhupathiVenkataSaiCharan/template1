import React, { useState } from 'react'
import "./edit.css"
import { useNavigate } from 'react-router-dom'

const Edit = (formValues) => {

  const [user, setUser] = useState("charan");
  const [email, setEmail] = useState("saicharan12599@gmail.com");
  const [number, setNumber] = useState("9837612345");


  let navigate = useNavigate();

  const profilePage = () =>{
      navigate("/profilepage");
  }

  return (
    <>
        {/* <h1>This is the profile page</h1>
        <p>{localStorage.getItem("formValues")}</p>
        <button onClick={Logout}>Logout</button> */}

        <center>
          <div className="box">
            <img src="../../images/img1.jpg" alt="pic"/>
            <input type="file" name="" id="file" accept='image' />
            <label>EDIT PICTURE</label>
            <input type="text" name='' value={user} placeholder='User Name' onChange={e=>setUser(e.target.value)} />
            <input type="email" name='' value={email} placeholder='Email' onChange={e=>setEmail(e.target.value)} />
            <input type="text" name='' value={number} placeholder='Phone Number' onChange={e=>setNumber(e.target.value)} />
            {/* <input type="text" name='' placeholder='Date of Birth' /> */}
            {/* <input type="text" name='' placeholder='GENDER' /> */}
            <button style={{float:"left",margin:"10px 0 0 18.2%"}} onClick={profilePage}>DONE</button>
            <button style={{float:"left",margin:"10px 18.2% 0 10px"}}>CANCEL</button>
          </div>
        </center>

    </>
  )
}

export default Edit;