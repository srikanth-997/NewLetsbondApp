import react from "react";

const {type, payload}= action;

switch(type)
{
    case "LOGGED_IN":
        localStorage.setItem('phoneNum', payload)
    case "LOGGED_OUT":
        localStorage.removeItem('phoneNum')
}