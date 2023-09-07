// import React from "react";
import { useNavigate } from "react-router-dom";

//assets
import WhiteLogo from "../assets/WhiteLogo.svg";
import WhiteLogo2 from "../assets/WhiteLogo2.svg";
import Direct from "../assets/direct.svg";
import User from "../assets/user.svg";

function Nav() {
  const nav = useNavigate();
  const name = localStorage.getItem("username");
  const type = localStorage.getItem("type");
  const logOut = () => {
    localStorage.clear();
    nav("/");
  };
  return (
    <div>
      {type == "manager" && (
        <nav className="bg-dark-blue flex justify-between">
          <div className="flex gap-5 justify-center items-center">
            <img className="w-14 py-3 ml-5" src={WhiteLogo} />
            <a className=" cursor-pointer"><img className="w-10 py-3 ml-5" src={Direct} /></a>
          </div>
          <div className="flex justify-center items-center text-white gap-4">
            <a className=" cursor-pointer hover:text-cyan-400" onClick={logOut}>
              LogOut
            </a>
            {name}
            <img className="w-12 py-3 mr-5" src={User} />
          </div>
        </nav>
      )}
      {type == "Supervisor" && (
        <nav className="bg-light-blue flex justify-between">
          <div className="flex gap-5 justify-center items-center">
            <img className="w-14 py-3 ml-5" src={WhiteLogo2} />
            <a className=" cursor-pointer"><img className="w-10 py-3 ml-5" src={Direct} /></a>
          </div>
          <div className="flex justify-center items-center text-white gap-4">
            <a className=" cursor-pointer hover:text-cyan-400" onClick={logOut}>
              LogOut
            </a>
            {name}
            <img className="w-12 py-3 mr-5" src={User} />
          </div>
        </nav>
      )}
      {type == "Technician" && (
        <nav className="bg-light-blue flex justify-between">
          <div className="flex gap-5">
            <img className="w-14 py-3 ml-5" src={WhiteLogo2} />
          </div>
          <div className="flex justify-center items-center text-white gap-4">
            <a className=" cursor-pointer hover:text-cyan-400" onClick={logOut}>
              LogOut
            </a>
            {name}
            <img className="w-12 py-3 mr-5" src={User} />
          </div>
        </nav>
      )}
    </div>
  );
}

export default Nav;
