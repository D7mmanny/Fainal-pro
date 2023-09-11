import React from "react";
import { useNavigate } from "react-router-dom";
import Info from "../Components/Info";
//assets
import WhiteLogo from "../assets/WhiteLogo.svg";
import WhiteLogo2 from "../assets/WhiteLogo2.svg";
import Direct from "../assets/direct.svg";
import User from "../assets/user.svg"

function Dashboard() {
  const Login = localStorage.getItem("Login")
  if(Login != "true") {window.location.href="/";}
  const [active, setActive] = React.useState("Info");
  const nav = useNavigate();
  const type = localStorage.getItem("type");
  const name = localStorage.getItem("username"); 

  const logOut = () => {
    localStorage.clear();
    nav("/");
  };
  return (
    <div>
      {/* Nav */}
      {type == "manager" && (
        <nav className="bg-dark-blue flex justify-between">
          <div className="flex gap-5 justify-center items-center">
            <img className="w-14 py-3 ml-5" src={WhiteLogo} />
            <a href="/FactoryReports" className=" cursor-pointer"><img className="w-10 py-3 ml-5" src={Direct} /></a>
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
            <a href="/TechnicianReport" className=" cursor-pointer"><img className="w-10 py-3 ml-5" src={Direct} /></a>
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

      {/* content */}
      <div className="flex">
        <div className="w-2/6 lg:w-1/4 flex flex-col items-center bg-dark-blue h-screen gap-80">
          <div className="flex flex-col items-center w-full ">
          <img className="pt-12" src={User} />
          <h1 className="text-xl text-white mt-5"> {name}</h1>

          <hr className="border border-gray-400 lg:w-full w-48 mt-8 border-spacing-0.5" />
          <a  onClick={() => {
                  setActive("Info");
                }} className=" hover:bg-cyan-950 cursor-pointer text-center"><h1 className="text-lg text-white py-4 px-10 mx-1"> personal information</h1></a>
          </div>

          <a onClick={logOut} className=" hover:bg-cyan-950 cursor-pointer text-center"><h1 className="text-lg  text-white lg:py-4 py-10 lg:px-20 mx-1 lg:mt-0 mt-52"> Log out</h1></a>
          
        </div>
        <div className="w-full flex justify-center lg:items-center md:items-start mt-14 lg:mt-0">

          {active == "Info" && <Info/>}
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
