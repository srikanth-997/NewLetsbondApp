import React, { useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

export default function Register() {
   

  return (
    <div><section id="secId"class="vh-100 bg-image"
    >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-6 col-xl-5">
            <div class="card" >
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-4">Create an account</h2>
  
                <form>
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example1cg" class="form-control form-control-md" />
                    <label class="form-label" for="form3Example1cg">First Name</label>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example1cg" class="form-control form-control-md" />
                    <label class="form-label" for="form3Example1cg">Last Name</label>
                  </div>
                  <div class="form-outline">
                    <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
                    <label class="form-label" for="phoneNumber">Enter OTP</label>
                  </div>
  
                  
                  <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>
  
  
                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                    <label class="form-check-label" for="form2Example3g">
                      I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>
  
                  <div class="d-flex justify-content-center col-12" >
                   <span class="col-md-4"> <Link type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" to="">Register</Link></span>
                  <span class="col-md-4"><Link type="button"
                      class="btn btn-danger btn-block btn-lg gradient-custom-4 text-body" to="/homePage">Cancel</Link></span>
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
