import React from "react";
import { useNavigate } from "react-router-dom";
//assets
import WhiteLogo from "../assets/WhiteLogo.svg";
import WhiteLogo2 from "../assets/WhiteLogo2.svg";
import Direct from "../assets/direct.svg";

function Dashboard() {
    const nav = useNavigate();
  const type = localStorage.getItem("type");
  return (
    <div>
      {/* Nav */}
      {type == "manager" && (
        <nav className="bg-dark-blue flex justify-between">
          <div className="flex gap-5 justify-center items-center">
            <img className="w-14 py-3 ml-5" src={WhiteLogo} />
            <a className=" cursor-pointer">
              <img className="w-10 py-3 ml-5" src={Direct} />
            </a>
          </div>
          <div className="flex justify-center items-center text-white gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className=" cursor-pointer mr-8 w-8 h-8"
              onClick={()=>{nav("/HomeManager")}}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </nav>
      )}
      {type == "Supervisor" && (
        <nav className="bg-light-blue flex justify-between">
          <div className="flex gap-5 justify-center items-center">
            <img className="w-14 py-3 ml-5" src={WhiteLogo2} />
            <a className=" cursor-pointer">
              <img className="w-10 py-3 ml-5" src={Direct} />
            </a>
          </div>
          <div className="flex justify-center items-center text-white gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className=" cursor-pointer mr-8 w-8 h-8"
              onClick={()=>{nav("/HomeSup")}}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </nav>
      )}
      {type == "Technician" && (
        <nav className="bg-light-blue flex justify-between">
          <div className="flex gap-5 justify-center items-center">
            <img className="w-14 py-3 ml-5" src={WhiteLogo2} />
          </div>
          <div className="flex justify-center items-center text-white gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className=" cursor-pointer mr-8 w-8 h-8"
              onClick={()=>{nav("/HomeTech")}}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Dashboard;
