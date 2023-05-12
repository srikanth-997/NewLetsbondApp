import React, { useEffect } from 'react'
import "./UserDashBoard.css"
import { Link, json, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios';
import { Button } from 'bootstrap';

export default function UserDashBoard() {

  const str = {
    color: 'black',
    backgroundColor: '#E6DFDF'
  }

  const [dataList, setDataList] = useState([]);
  const [entertainmentColor, setEntertainmentColor] = useState('#cdd1cd');
  const [sportsColor, setSportsColor] = useState('#cdd1cd');
  const [adventureColor, setAdventureColor] = useState('#cdd1cd');
  const [foodColor, setFoodColor] = useState('#cdd1cd');
  const [travelColor, setTravelColor] = useState('#cdd1cd');
  const [partyColor, setPartyColor] = useState('#cdd1cd');
  const [danceColor, setDanceColor] = useState('#cdd1cd');
  const [historyColor, setHistoryColor] = useState('#cdd1cd');
  
  function handleButtonClick(event) {
    const data= event.target.getAttribute('data');
    if (!dataList.includes(data)) {
      setDataList([...dataList, data]);
    }
    const index = dataList.indexOf(data);
    if (index === -1) {
      // If the data is not already present in the list, add it
      setDataList([...dataList, data]);
    } else {
      // If the data is already present in the list, remove it
      const newDataList = [...dataList];
      newDataList.splice(index, 1);
      setDataList(newDataList);
    }
    // Update the button color based on the dataList length
    // if (newDataList.length > 0) {
    //   setButtonColor('red');
    // } else {
    //   setButtonColor('blue');
    // }
    // Update the color of the clicked button
    switch (data) {
      case 'ENTERTAINMENT':
        setEntertainmentColor((prevColor) => prevColor === '#ccffff' ? '#cdd1cd' : '#ccffff');
        break;
      case 'SPORTS':
        setSportsColor((prevColor) => prevColor === '#ccffff' ? '#cdd1cd' : '#ccffff');
        break;
      case 'ADVENTURE':
        setAdventureColor((prevColor) => prevColor === '#ccffff' ? '#cdd1cd' : '#ccffff');
        break;
      case 'FOOD':
        setFoodColor((prevColor) => prevColor === '#ccffff' ? '#cdd1cd' : '#ccffff');
        break;
      case 'TRAVEL':
        setTravelColor((prevColor) => prevColor === '#ccffff' ? '#cdd1cd' : '#ccffff');
        break;
      case 'PARTY':
        setPartyColor((prevColor) => prevColor === '#ccffff' ? '#cdd1cd' : '#ccffff');
        break;
      case 'DANCE':
        setDanceColor((prevColor) => prevColor === '#ccffff' ? '#cdd1cd' : '#ccffff');
        break;
      case 'HISTORY':
        setHistoryColor((prevColor) => prevColor === '#ccffff' ? '#cdd1cd' : '#ccffff');
        break;
      default:
        break;
    }
  }
  // useEffect(() => {
  //   if (dataList.length > 0) {
  //     setButtonColor('red');
  //   } else {
  //     setButtonColor('blue');
  //   }
  // }, [dataList]);
  useEffect(()=>{
    console.log(dataList)
  },[dataList])
  const phoneNum=localStorage.getItem('phoneNum')
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://10.81.4.184:2023/user/register/addInterests", {
      method: "POST",
      headers: { "Content-Type": "application/json",
    "phoneNum": JSON.parse(phoneNum) },
      body: JSON.stringify(dataList),
  } 
   ).then((response) => {
       
         
            
            alert('Added User Interests');
            navigate('/addEvent')

       

    }
    ).catch((error) => {
        alert(error)

    })

}
  return (

    <div><section class="vh-100 bg-image" id="userdashsecId">
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <div class="container">
        <form onSubmit={handleSubmit} > 
        <div class="row">
          <div class="col-6">
            <h4 style={{backgroundColor:entertainmentColor}} className='hvr-pulse-grow' data='ENTERTAINMENT' onClick={handleButtonClick}>ENTERTAINMENT</h4>
          </div>

          <div class="col-6">
            <h4 className='hvr-pulse-grow'style={{backgroundColor:sportsColor}}  data='SPORTS' onClick={handleButtonClick}>SPORTS</h4>
          </div>

        </div><br />
        <div class="row">
          <div class="col-12">
            <h4 className='hvr-pulse-grow' style={{backgroundColor:adventureColor}}  data='ADVENTURE' onClick={handleButtonClick} >ADVENTURE</h4>
          </div>


        </div><br />
        <div class="row">
          <div class="col-6">
            <h4 className='hvr-pulse-grow' style={{backgroundColor:foodColor}}   data='FOOD' onClick={handleButtonClick}>FOOD</h4>
          </div>
          <div class="col-6">
            <h4 className='hvr-pulse-grow' style={{backgroundColor:travelColor}}   data='TRAVEL' onClick={handleButtonClick}>TRAVEL</h4>
          </div>

        </div><br />
        <div class="row">
          <div class="col-6">
            <h4 className='hvr-pulse-grow' style={{backgroundColor:partyColor}}   data='PARTY' onClick={handleButtonClick}>PARTY</h4>
          </div>
          <div class="col-6">
            <h4 className='hvr-pulse-grow' style={{backgroundColor:danceColor}}   data='DANCE' onClick={handleButtonClick}>DANCE</h4>
          </div>

        </div><br />
        <div class="row">
          <div class="col-12">
            <h4 className='hvr-pulse-grow' style={{backgroundColor:historyColor}}   data='HISTORY' onClick={handleButtonClick}>HISTORY</h4>
          </div>


        </div><br></br><br></br>
        <div class="row">
          <div class="col-12">
            <button  type="submit" class="btn btn-success">ADD</button>
          </div>


        </div>

        </form>
        
      </div>

    </section></div>
  )
}
