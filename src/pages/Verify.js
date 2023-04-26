import React from 'react'
import "./Home.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios';
import { Button } from 'bootstrap'

export default function Verify() {
    const [user_otp, setUserOtp] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://10.81.4.184:2023/user/register/validateOtp", {}, {
            params: { otpNumber: user_otp }

        }).then((response) => {
            if (response.data) {
                navigate('/register');
                alert('OTP Verified');
            } else {
                alert('Not Valid');
            }

        }
        ).catch((error) => {
            alert(error)

        })

    }

    return (
        <div>
            <section id="secId" class="vh-100 bg-image"
            >
                <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-9 col-lg-6 col-xl-5">
                                <div class="card" >
                                    <div class="card-body p-5">
                                        <h4 class="text-uppercase text-center mb-5">Verify OTP</h4>
                                        <form onSubmit={handleSubmit}>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label class="form-label" for="Otp">Enter OTP</label>
                                                </div>
                                                <div class="col-md-7">
                                                    <input type="tel" id="Otp" class="form-control form-control-lg" value={user_otp} onChange={(e) => setUserOtp(e.target.value)} />

                                                </div>
                                            </div><br></br>
                                            <div class="row justify-content-center">
                                                <div class="col-4 ">


                                                    <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Verify</button>
                                                </div>

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
            </section>
        </div>
    )
}
