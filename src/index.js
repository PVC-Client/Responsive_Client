import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gstregis_form from './Gstregis_form';
import Multipleinputs from './login/Multipleinputs';
import Signup from './signup/SignUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path='/gst_registration' element={<Gstregis_form/>}></Route>
    <Route path="/login" element={<Multipleinputs/>}></Route>
    <Route path="/createAccount" element={<Signup/>}></Route>
  </Routes>
 </BrowserRouter>
);


