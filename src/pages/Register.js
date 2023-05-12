import React, { useState } from 'react'
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {

  const [first_Name, setFirstName]= useState('')
  const [last_Name, setLastName]=useState('')
  const [user_email, setUserEmail]=useState('')
  const [phone_Number, setPhoneNumber]=useState('')
  const [user_gender, setGender]=useState('')
  const [terms_condtions, setTermsAndConditions]=useState(false)

 const navigate= useNavigate();

const handleSubmit= (e)=>{
  e.preventDefault();
  axios.post("http://10.81.4.184:2023/user/register/saveUser",{
    firstName:first_Name,
    lastName:last_Name,
    phoneNumber:phone_Number,
    email:user_email,
    gender:user_gender,
    termsAndConditions:terms_condtions
  }).then((response)=>
  {
    alert('Registered successfully')
    navigate('/')
  }).catch((error)=>
  {
    alert(error)
  })
}

  return (

    <div><section id="regsecId" class="vh-100 bg-image">
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-6 col-xl-5">
              <br></br>
              <div class="card" >
                <div class="card-body p-4">
                  <h5 class="text-uppercase text-center text-dark mb-4">Register</h5>

                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-md-3">
                        <label class="form-label text-dark" for="firstName">First Name</label>
                      </div>
                      <div class="col-md-6">

                        <input type="text" id="firstName" class="form-control form-control-md" value={first_Name} onChange={(e)=>setFirstName(e.target.value)}/>
                      </div>
                    </div><br></br>

                    <div class="row">
                      <div class="col-md-3">
                        <label class="form-label text-dark" for="lastName">Last Name</label>
                      </div>
                      <div class="col-md-6">

                        <input type="text" id="lastName" class="form-control form-control-md" value={last_Name} onChange={(e)=>setLastName(e.target.value)}/>
                      </div>
                    </div><br></br>

                    <div class="row">
                      <div class="col-md-3">
                        <label class="form-label text-dark" for="email">Email</label>
                      </div>
                      <div class="col-md-6">

                        <input type="email" id="email" class="form-control form-control-md text-dark" value={user_email} onChange={(e)=>setUserEmail(e.target.value)} />
                      </div>
                    </div><br></br>

                    <div class="row">
                      <div class="col-md-3">
                        <label class="form-label text-dark" for="phoneNumber">Phone Number</label>
                      </div>
                      <div class="col-md-6">

                        <input type="text" id="phoneNumber" class="form-control form-control-md" value={phone_Number} onChange={(e)=>setPhoneNumber(e.target.value)}/>

                      </div>
                    </div>
                    <div class="row ">

                      <div class="d-md-flex justify-content-center align-items-center mb-4 py-2 ">

                        <h6 class="mb-0 me-4 text-dark">Gender: </h6>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="male" checked={user_gender === "male"} onChange={(e)=>setGender(e.target.value)} />
                          <label class="form-check-label text-dark" for="femaleGender">Female</label>
                        </div>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                           value="female" checked={user_gender === "female"} onChange={(e)=>setGender(e.target.value)} />
                          <label class="form-check-label text-dark" for="maleGender">Male</label>
                        </div>

                        <div class="form-check form-check-inline mb-0">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="other" checked={user_gender === "other"} onChange={(e)=>setGender(e.target.value)} />
                          <label class="form-check-label text-dark" for="otherGender">Other</label>
                        </div>
                      </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input class="form-check-input me-2" type="checkbox" value="" id="checkbox"  checked={terms_condtions} onChange={(e)=>setTermsAndConditions(e.target.checked)} />
                      <label class="form-check-label text-dark" for="checkbox">
                        I agree all statements in <a href="#!" class="text-body text-dark"><u>Terms of service</u></a>
                      </label>
                    </div>

                    <div class="d-flex justify-content-center col-12" >
                      <span class="col-md-4"> 
                      <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" disabled={!terms_condtions }>Register</button>
                      </span>
                      <span class="col-md-4"><Link type="button"
                        class="btn btn-danger btn-block btn-lg gradient-custom-4 text-body" to="/homePage">Cancel</Link></span>
                    </div>

                    <p class="text-center mt-5 mb-0 text-dark">Have already an account? <a href="/"
                      class="fw-bold text-body text-dark"><u>Login here</u></a></p>

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
