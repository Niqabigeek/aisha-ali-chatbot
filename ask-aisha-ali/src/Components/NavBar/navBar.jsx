import React from "react";
import { Link } from "react-router-dom";
import Weblogo from "../../assets/Roboty.png";
import "./navBar.css";


function navBar() {
  return (
    <>

      <header className="">
        <div className="nav-container">
          <a className="" href="/">
            <img src={Weblogo} alt="header logo" style={{width: "120px"}}/>
          </a>

          <div className="nav-buttons">
            <Link to="/parents">
             <button className="rounded-md cursor-pointer">For Parents</button>
            </Link>
            <Link to="/">
              <button className="rounded-md cursor-pointer">Bots</button>
            </Link>
           
            <Link to="https://chat.whatsapp.com/D7iLhzrEE9kLxDrDRbejv3" target="_blank">
             <button className="rounded-md cursor-pointer">Join Community</button>

            </Link>

          </div>

        </div>
          
      </header>
    </>
   
  )
}

export default navBar