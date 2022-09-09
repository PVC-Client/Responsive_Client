
import React, { useState } from 'react'
import './gst_filing.css'

const Gst_filing = () => {

    const [user, fullinfo] = useState(
        {
            your_name: "",
            dob: "",
            mob_number: "",
            email: "",
            father_name: "",
            pan_number: "",
            pan_photo: "",
            bank_statement: "",
            lic_premium: "",
            medical_insurance: "",
            aadhar_number: "",
            loan_statement: "",
            donation_receipt: "",
            property: "",
            curr_address: "",
            permanent_address: "",
            form_16: ""



        }
    );

    let name, value;
    const onchange = (e) => {
        name = e.target.name;
        value = e.target.value;
        fullinfo({ ...user, [name]: value });
    }
    //   const eventHandler=(e)=>{
    //     const reader=new FileReader();
    //     reader.onload=()=>{
    //     console.log(reader.result);
    //     }
    //     reader.readAsDataURL(e.target.files[0])
    //   }
    return (
        <div className='gst_fill'>
            <div className='head'>
                <h1>GST FILING Form</h1>
            </div>
            <div className='content'>
                <div className='inside_content'>
                    <h1 className='mx-auto w-25 pt-1' style={{ padding: "10px 0" }}>DETAILS</h1>
                    <hr></hr>
                    <form >

                        <div className='field pt-4'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>YOUR NAME</h5>
                            <input type="text" className='inp' name='your_name' value={user.your_name} onChange={onchange}></input>
                        </div>

                        <div className='field pt-4'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>DATE OF BIRTH</h5>
                            <input type="date" className='inp' name='dob' value={user.dob} onChange={onchange}></input>
                        </div>


                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>Phone Number</h5>
                            <input type="number" className='inp' name='mob_number' value={user.mob_number} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>Email</h5>
                            <input type="emailr" className='inp' name='email' value={user.email} onChange={onchange}></input>
                        </div>

                        <div className='field pt-4'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>FATHER'S NAME</h5>
                            <input type="text" className='inp' name='father_name' value={user.father_name} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>PAN Number</h5>
                            <input type="number" className='inp' name='pan_number' value={user.pan_number} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>Pan Card Photo</h5>
                            <input type="file" className='inp'
                                name='pan_photo' value={user.pan_photo} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>BANK STATEMENT FROM 1-4-21 TO 31-2-22</h5>
                            <input type="file" className='inp'
                                name='bank_statement' value={user.bank_statement} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>LIC PREMIUM IF PAID</h5>
                            <input type="file" className='inp'
                                name='lic_premium' value={user.lic_premium} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>MEDICAL INSURANCE DETAILS IF PAID</h5>
                            <input type="file" className='inp'
                                name='medical_insurance' value={user.medical_insurance} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>AADHAR Number</h5>
                            <input type="number" className='inp' name='aadhar_number' value={user.aadhar_number} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>AADHAR PHOTO</h5>
                            <input type="file" className='inp'
                                name='aadhar_photo' value={user.aadhar_photo} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>Loan statement stating interest and principal repaid during the last financial year(if had any)</h5>
                            <input type="file" className='inp'
                                name='loan_statement' value={user.loan_statement} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>Donation reciepts if made</h5>
                            <input type="file" className='inp'
                                name='donation_receipt' value={user.donation_receipt} onChange={onchange}></input>
                        </div>

                        <div className='field pt-4'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>Any Properties and Assests registered
                                on yor name</h5>
                            <input type="text" className='inp' name='property' value={user.property} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>Complete Current Address</h5>
                            <input type="text" className='inp' name='curr_address' value={user.curr_address} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>Complete Permanent Address</h5>
                            <input type="text" className='inp' name='permanent_address' value={user.permanent_address} onChange={onchange}></input>
                        </div>

                        <div className='field'>
                            <h5 style={{ color: "black", fontWeight: "bolder" }}>Form 16</h5>
                            <input type="file" className='inp'
                                name='form_16' value={user.form_16} onChange={onchange}></input>
                        </div>


                        <button type='submit'>Submit Form</button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default Gst_filing
