import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import  Axios  from 'axios';
import { Button } from 'bootstrap';

export default function Home() {
 
const [phone_Number, setPhoneNumber]=useState('');

//  function auth() {
// const config = {
//      headers: {
// "Access-Control-Allow-Origin": "*",
// "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//  },
//   };
//    return config;

// }

const handleSubmit=(e)=>
{
  e.preventDefault();
  Axios.post("http://10.81.4.184:2023/user/register/sendOtp",{
  phoneNum: phone_Number
  })
  .then((response)=>
  {
  
    alert("Sent Otp");
  }).catch((error)=>{
   alert(error)
  })

}
  return (
    <div><section id="secId"class="vh-100 bg-image"
    >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-6 col-xl-5">
            <div class="card" >
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Create an account</h2>
  
                <form  onSubmit={handleSubmit}> 
                <div class="form-outline">
                    <input type="tel" id="phoneNumber" class="form-control form-control-lg" value={phone_Number} onChange={(e)=>setPhoneNumber(e.target.value) }/>
                    <label class="form-label" for="phoneNumber">Phone Number</label>
                  </div>
            
                  <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">GET OTP</button>
                  </div>
  
                  <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                      class="fw-bold text-body"><u>Login here</u></a></p>
                
                </form>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
