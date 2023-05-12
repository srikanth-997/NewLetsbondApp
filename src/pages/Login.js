import React from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import  Axios  from 'axios';
import { Button } from 'bootstrap';

export default function Login() {

  const navigate= useNavigate()
 
const [phone_Number, setPhoneNumber]=useState('');
const [error, setError] = useState("");

//  function auth() {
// const config = {
//      headers: {
// "Access-Control-Allow-Origin": "*",
// "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//  },
//   };
//    return config;

// }
{/*var form=document.getElementById('crd');
form.addEventListener('mousemove',(e)=>{
  var form=document.getElementById('crd');
  var x=(window.innerWidth/2 - e.pageX)/12;
  var y=(window.innerHeight/2 - e.pageY)/12;
  form.style.transform= 'rotateX('+x+'deg)rotateY('+y+'deg)'

});
form.addEventListener('mouseleave', function(){
  
  form.style.transform= 'rotateX(0deg)rotateY(0deg)'
})
*/}
const handleSubmit=(e)=>
{
  e.preventDefault();
  Axios.post("http://10.81.4.184:2023/user/register/login",{
  phoneNum: phone_Number
  },{})
  .then((response)=>
  {
  
    navigate('/loginVerify')
   
    
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
            <div class="card " id="crd">
              <div class="card-body p-5">
                <h4 class="text-uppercase text-center text-dark mb-5">Login</h4>
  
                <form  onSubmit={handleSubmit}> 
                <div class="row">
                  <div class="col-md-4">
                  <label class="form-label text-dark " for="phoneNumber" >Phone Number</label>
                    </div>
                    <div  class="col-md-7">
                    <input type="tel" id="phoneNumber" class="form-control form-control-md " value={phone_Number} onChange={(e)=>setPhoneNumber(e.target.value) }/>
                    </div>
                   
                 
                  </div><br></br>
                  <div class="row justify-content-center">
                  <div class="col-4 ">
            
               
                  <button type="submit" class="btn btn-success btn-block btn-md gradient-custom-4 text-body border-secondary" >GET OTP</button>
                  </div>
                
                 </div>
                  <p class="text-center  mt-5 mb-0 text-dark">Don't you have an account? <a href="/homePage"
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
