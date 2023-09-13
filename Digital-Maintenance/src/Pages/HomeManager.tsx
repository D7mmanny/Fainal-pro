// import React from 'react'
import Nav from "../Components/Nav";
import Map from "../assets/Map.svg";
import { useNavigate } from "react-router-dom";

// Saudi Map
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";
import four from "../assets/4.svg";
import five from "../assets/5.svg";
import six from "../assets/6.svg";
import seven from "../assets/7.svg";
import eight from "../assets/8.svg";
import nine from "../assets/9.svg";
import ten from "../assets/10.svg";
import Eleven from "../assets/11.svg";
import Twelve from "../assets/12.svg";
import thirteen from "../assets/13.svg";

// Factory
import Jeddah from "../assets/Jeddah.svg";
import Najran from "../assets/Najran.svg";
import Riyadh from "../assets/Riyadh.svg";
import alkhubar from "../assets/alkhubar.svg";
import north from "../assets/north.svg";
import Tabuk from "../assets/Tabuk.svg";

function HomeManager() {
  const Login = localStorage.getItem("Login")
  if(Login != "true") {window.location.href="/";}
  const nav = useNavigate();
  return (
    <div>
      <Nav />
      <div className=" bg-dark-blue  ">
        {/* Map background */}
        <img className="w-screen  h-screen lg:h-fit" src={Map} />

        {/*Saudi Map*/}
        <div>
          <img
            className="map1 transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer "
            src={one}
          />
          <img
            className=" map2  transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer"
            src={two}
          />
          <img
            className=" map3 transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer"
            src={three}
          />
          <img
            className=" map4 transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer"
            src={four}
          />
          <img
            className=" map5 transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer"
            src={five}
          />
          <img
            className=" map6 transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer"
            src={six}
          />
          <img
            className=" map7 transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer"
            src={seven}
          />
          <img
            className=" map8 transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer"
            src={eight}
          />
          <img
            className=" map9 transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer"
            src={nine}
          />
          <img
            className=" map10 transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer"
            src={ten}
          />
          <img
            className=" map11  transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer"
            src={Eleven}
          />
          <img
            className="map12 pl-2 transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer"
            src={Twelve}
          />
          <img
            className="map13 pl-2 transition ease-in-out delay-150 hover:-translate-y hover: cursor-pointer"
            src={thirteen}
          />

          {/* factory */}

          {/* jeddah */}
          <div
            onClick={() => {
              localStorage.setItem("CityFactoryReports", "Jeddah");
              nav("/CityFactoryReports");
            }}
            className="jeddah flex items-center gap-1 text-transparent hover:text-white transition ease-in-out delay-300 "
          >
            <img
              className=" transition ease-in-out delay-150 hover:-translate-y border-2 border-green-600 hover:border-white rounded-full cursor-pointer"
              src={Jeddah}
            />
            <p>Jeddah Factory</p>
          </div>

          {/* Najran */}
          <div
            onClick={() => {
              localStorage.setItem("CityFactoryReports", "Najran");
              nav("/CityFactoryReports");
            }}
            className="Najran flex items-center gap-1 text-transparent hover:text-white transition ease-in-out delay-300 "
          >
            <img
              className=" transition ease-in-out delay-150 hover:-translate-y border-2 border-green-600 hover:border-white rounded-full cursor-pointer"
              src={Najran}
            />
            <p>Najran Factory</p>
          </div>

          {/* Riyadh */}
          <div
            onClick={() => {
              localStorage.setItem("CityFactoryReports", "Riyadh");
              nav("/CityFactoryReports");
            }}
            className="Riyadh flex items-center gap-1 text-transparent hover:text-white transition ease-in-out delay-300 "
          >
            <img
              className=" transition ease-in-out delay-150 hover:-translate-y border-2 border-green-600 hover:border-white rounded-full cursor-pointer"
              src={Riyadh}
            />
            <p>Riyadh Factory</p>
          </div>

          {/* alkhubar */}
          <div
            onClick={() => {
              localStorage.setItem("CityFactoryReports", "Alkhubar");
              nav("/CityFactoryReports");
            }}
            className="alkhubar flex items-center gap-1 text-transparent hover:text-white transition ease-in-out delay-300 "
          >
            <img
              className=" transition ease-in-out delay-150 hover:-translate-y border-2 border-green-600 hover:border-white rounded-full cursor-pointer"
              src={alkhubar}
            />
            <p>al-khubar Factory</p>
          </div>

          {/* north */}
          <div
            onClick={() => {
              localStorage.setItem("CityFactoryReports", "North");
              nav("/CityFactoryReports");
            }}
            className="north flex items-center gap-1 text-transparent hover:text-white transition ease-in-out delay-300 "
          >
            <img
              className=" transition ease-in-out delay-150 hover:-translate-y border-2 border-green-600 hover:border-white rounded-full cursor-pointer"
              src={north}
            />
            <p>North Factory</p>
          </div>

          {/* Tabuk */}
          <div
            onClick={() => {
              localStorage.setItem("CityFactoryReports", "Tabuk");
              nav("/CityFactoryReports");
            }}
            className="Tabuk flex items-center gap-1 text-transparent hover:text-white transition ease-in-out delay-300 "
          >
            <img
              className=" transition ease-in-out delay-150 hover:-translate-y border-2 border-green-600 hover:border-white rounded-full cursor-pointer"
              src={Tabuk}
            />
            <p>Tabuk Factory</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeManager;
