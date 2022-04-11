import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = (formValues) => {

  let navigate = useNavigate();

  const Logout = () =>{
      navigate("/shop/login");
  }

  const doEdit = () =>{
    navigate("/shop/edit");
}

  return (
    <>
        {/* <h1>This is the profile page</h1>
        <p>{localStorage.getItem("formValues")}</p>
        <button onClick={doEdit}>Edit details</button>
        <button onClick={Logout} style={{marginLeft:"20%"}}>Logout</button> */}
        <div className="row gx-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#m">
    {/* <img className='navbar-img' src='http://www.bizwy.com/images/Bizwy-logo-180.svg'
                                alt='logo' width="70" height="70" style={{marginLeft:"40px"}} /> */}
    <img className='navbar-img' src='../../images/img1.jpg'
                                alt='logo' width="70" height="70" style={{marginLeft:"40px"}} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#m">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#m">Link</a>
        </li>
        <li className="nav-item dropdown" style={{marginRight:"50px"}}>
          <a className="nav-link dropdown-toggle text-white" href="#m" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
            
            <li >
            <button style={{backgroundColor:"transparent",color:"white"}} onClick={doEdit}>Edit details</button>
            </li>
            <li><hr className="dropdown-divider"/></li>
            <li>
            <button style={{backgroundColor:"transparent",color:"white"}} onClick={Logout}>Logout</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>

<div className='text-lg-center'>
  <h1>This is the Profile Page</h1>
</div>

    </>
  )
}

export default ProfilePage;