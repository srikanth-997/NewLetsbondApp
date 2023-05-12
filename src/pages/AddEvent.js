import React, { useState } from "react";

import './AddEvent.css';

import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { useNavigate } from "react-router-dom";

export default function AddEvent() {
  const[eventTitle, setEventTitle]=useState('');
  const[details,setDetails]=useState('');
  const[eventLocation, setEventLocation]=useState('');
  const[charges,setChargs]=useState('');
  const [error, setError] = useState(null);
  const [selectedStartDateTime, setSelectedStartDateTime] = useState(null);
  const [selectedEndDateTime, setSelectedEndDateTime] = useState(null);
  const [selectedOption, setSelectedOption]=useState(null);

  const navigate=useNavigate();

  const handleStartDateTimeChange = (date) => {
    setSelectedStartDateTime(date);
  };
  const handleEndDateTimeChange = (date) => {
    setSelectedEndDateTime(date);
  };
  

  const formattedStartDateTime = selectedStartDateTime
    ? moment(selectedStartDateTime).format('YYYY-MM-DD HH:mm')
    : '';
    const formattedEndDateTime = selectedEndDateTime
    ? moment(selectedEndDateTime).format('YYYY-MM-DD HH:mm')
    : '';
    const phoneNum=localStorage.getItem('phoneNum');
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("http://10.81.4.184:2023/user/register/eventCreation", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "phoneNum": JSON.parse(phoneNum),
        },
        body: JSON.stringify({
          title: eventTitle,
          location: eventLocation,
          startTime: selectedStartDateTime,
          endTime: selectedEndDateTime,
          incurCharges: charges,
          genderPreference: selectedOption,
          details: details,
        }),
      })
        .then((response) => {
     
          if (!response.ok) {
            return response.json().then((errorData) => {
              throw new Error(errorData.Errormessage);
            });
          }
          navigate("/eventsScreen")
        })
        .catch((error) => {
          setError(error.message);
          window.alert(error.message);
        });
    };
    

  return (
    <div className="container-fluid">
      <br /><br /><br /><br /><br /><br />

      <form className="col addEVentForm" onSubmit={handleSubmit}>
              <div className="col" id="title">
          <h2 style={{ fontFamily: 'Cambria' }}>EVENT CREATION</h2>
        </div>
        <div>
          <input type="text" className="form-control addEvent" placeholder="Enter Your Event Title" value={eventTitle}  onChange={(e)=>setEventTitle
          (e.target.value)}/>
        </div>
        <div>
          <input type="text" className="form-control addEvent" placeholder="Details" value={details} onChange={(e)=>setDetails(e.target.value)}/>
        </div>
        <div>
          <input type="text" className="form-control addEvent" placeholder="Location" value={eventLocation} onChange={(e)=>setEventLocation(e.target.value)}/>
        </div>
        <div>
          <DateTime className=" addEvent" value={selectedStartDateTime}  onChange={handleStartDateTimeChange} 
            inputProps={{ placeholder: 'Start date and time' }}  />
    
        </div>
        <div>
          <DateTime className=" addEvent" value={selectedEndDateTime}  onChange={handleEndDateTimeChange} 
            inputProps={{ placeholder: 'End date and time' }}  />
    
        </div>
        
        <div>
          <input type="text" className="form-control addEvent" placeholder="Any charges or free" value={charges} onChange={(e)=>setChargs(e.target.value)}/>
        </div>
        
        <div>
            <select value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}  className="form-control addEvent">
                <option value="">Select Gender preference</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="NoPreference">NoPreference</option>


            </select>
        </div>
        <div>
          <button className="btn btn-success form-submit-button">ADD</button>
        </div>
      </form>
    </div>
  );
}