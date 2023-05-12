import React, { useEffect, useState } from "react";
import "./Header.css"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState({})
  useEffect(() => {
    { /*
        setInterval was used in order to refresh the page constantly
    in order to have the "logout" button show immediately in place of
    "login", as soon as user logs out.
    */}
    setInterval(() => {
      const userString = localStorage.getItem("phoneNum");
      const phoneNum = JSON.parse(userString);
      setIsLoggedIn(phoneNum);
    }, [])
  }, 5000);

  const navigate = useNavigate()


  const handleLogout = () => {
    localStorage.removeItem('phoneNum')
    navigate('/')


  };
  if (isLoggedIn !== null) {
    return (
      <div className="header">
        <a class="navbar-brand text-white h4 "><h5>Let's Bond <img src="https://static.vecteezy.com/system/resources/previews/004/180/845/original/blow-bubbles-together-black-glyph-icon-outdoor-activity-for-kid-parent-child-bond-spending-time-at-park-stress-relieving-activity-silhouette-symbol-on-white-space-isolated-illustration-vector.jpg"
          width="80" height="40" alt="" class="rounded-circle " /></h5> </a>

        <button class="btn btn-outline-danger" type="button" onClick={handleLogout}>Log Out</button>
      </div>

    )
  } else {
    return (
      <div className="header">
        <a class="navbar-brand text-white h4 "><h5>Let's Bond <img src="https://static.vecteezy.com/system/resources/previews/004/180/845/original/blow-bubbles-together-black-glyph-icon-outdoor-activity-for-kid-parent-child-bond-spending-time-at-park-stress-relieving-activity-silhouette-symbol-on-white-space-isolated-illustration-vector.jpg"
          width="80" height="40" alt="" class="rounded-circle " /></h5> </a>

      </div>

    )

  }

}
export default Header;