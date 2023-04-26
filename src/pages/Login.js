import React from 'react'
import "./Home.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import  Axios  from 'axios';
import { Button } from 'bootstrap';

export default function Login() {

  const navigate= useNavigate()
 
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
  },{})
  .then((response)=>
  {
  
    navigate('/verify')
    alert('Sent Otp')
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
                <h4 class="text-uppercase text-center mb-5">Login</h4>
  
                <form  onSubmit={handleSubmit}> 
                <div class="row">
                  <div class="col-md-4">
                  <label class="form-label" for="phoneNumber">Phone Number</label>
                    </div>
                    <div  class="col-md-7">
                    <input type="tel" id="phoneNumber" class="form-control form-control-md" value={phone_Number} onChange={(e)=>setPhoneNumber(e.target.value) }/>
                    </div>
                   
                 
                  </div><br></br>
                  <div class="row justify-content-center">
                  <div class="col-4 ">
            
               
                  <button type="submit" class="btn btn-success btn-block btn-md gradient-custom-4 text-body" >GET OTP</button>
                  </div>
                
                 </div>
                  <p class="text-center text-muted mt-5 mb-0">Don't you have an account? <a href="/homePage"
                      class="fw-bold text-body"><u>Sign up here</u></a></p>
                
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
