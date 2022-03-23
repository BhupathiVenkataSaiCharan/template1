import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {

  let navigate = useNavigate();

  const backHome = () =>{
    navigate("/")
  }

  return (
    <>
      <div>Error not found the page</div>
      <button onClick={backHome}>Getback to mainpage</button>
    </>
  )
}

export default Error;