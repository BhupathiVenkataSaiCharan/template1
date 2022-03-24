import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {

  let navigate = useNavigate();

  const backHome = () =>{
    navigate("/")
  }

  return (
    <>
      <div className='text-lg-center'>
        <h1>Error not found the page</h1>
        <button onClick={backHome}>Getback to mainpage</button>
      </div>
    </>
  )
}

export default Error;