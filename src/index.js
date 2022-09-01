import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gstregis_form from './Gstregis_form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path='/gst_registration' element={<Gstregis_form/>}></Route>
  </Routes>
 </BrowserRouter>
);


