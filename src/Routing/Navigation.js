import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Error from "../Pages/Error"

import Design1 from '../Design/Design1';
import Edit from '../Design/Edit';
import ProfilePage from '../Design/ProfilePage';


const Navigation = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/shop/login" element={<Design1/>}/>
                <Route path="/shop/profilepage" element={<ProfilePage/>}/>
                <Route path="/shop/edit" element={<Edit/>}/>
                <Route path="/" element={<Navigate replace to="/shop/login"/>}/>
                <Route path='*' element={<Navigate replace to="/"/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default Navigation;