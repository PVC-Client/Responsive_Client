import React, { useState } from 'react'
import './gstregistration_form.css';
const Gstregis_form = () => {
  const[user,fullinfo]=useState(
    {
      business_name:"",
      
    }
  )
  
  let name,value;
  const onchange=(e)=>{
    name=e.target.name;
    value=e.target.value;
    fullinfo({...user,[name]:value});
  }
//   const eventHandler=(e)=>{
//     const reader=new FileReader();
//     reader.onload=()=>{
//     console.log(reader.result);
//     }
//     reader.readAsDataURL(e.target.files[0])
//   }
  return (
    <div className='gst_reg'>
    <div className='head'>
        <h1>GST Registration Form</h1>
        </div>
        <div className='content'>
        <div className='inside_content'>
            <h1 className='mx-auto w-25 pt-1'>DETAILS</h1>
            <hr></hr>
            <form >
            <div className='field pt-4'>
                <h5 style={{color:"black",fontWeight:"bolder"}}>Name Of The Business</h5>
                <input type="text" className='inp' name='business_name' value={user.business_name} onChange={onchange}></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Nature of the Business</h5>
                <input type="text" className='inp'></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Phone Number</h5>
                <input type="number" className='inp'></input>               
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Email</h5>
                <input type="email" className='inp'></input>               
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Pan Card Xerox</h5>
                <input type="file" className='inp' ></input>              
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Aadhar Card Xerox</h5>
                <input type="file" className='inp'></input>               
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Proprietor Photo</h5>
                <input type="file" className='inp'></input>            
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Rent deed or Agreement of the registered office</h5>
                <input type="file" className='inp'></input>  
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Current bill of the registered office</h5>
                <input type="file" className='inp'></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Bank passbook of the proprietor</h5>
                <input type="file" className='inp'></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Aadhar Card of the Property Owner</h5>
                <input type="file" className='inp'></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Municipal Tax Receipt</h5>
                <input type="file" className='inp' ></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>HSN codes of the products selling or SAC codes of the services providing</h5>
                <input type="text" className='inp'></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Complete address of the registered office</h5>
                <input type="text" className='inp'></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Complete Residential address of the proprietor</h5>
                <input type="text" className='inp' ></input>
            </div>
            <button type='submit'>Submit Form</button>
            </form>
            </div>
        </div>
    </div>
    
  )
}

export default Gstregis_form