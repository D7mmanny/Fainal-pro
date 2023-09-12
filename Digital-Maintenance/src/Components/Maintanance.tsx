import { useState } from "react";
import React from "react";
// import React from "react";


function Maintanance() {
  const [Maintanance,setMaintanance]=useState({
    Equipment:"",
    MaintenanceType:""
  })
  
    const handleInput = (e :React.ChangeEvent<HTMLSelectElement>) => {
      e.persist();
      setMaintanance({ ...Maintanance, [e.target.name]: e.target.value });
    };
    localStorage.setItem("Equipment",Maintanance.Equipment)
    localStorage.setItem("MaintenanceType",Maintanance.MaintenanceType)
  return (
    <div>
      <div className="flex gap-5">
        {/* Equipment */}
        <div className="relative w-full lg:max-w-sm">
          <h1 className=" text-light-blue text-center pb-2">
            Chose the Equipment
          </h1>
          <select name="Equipment" onChange={handleInput} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-light-blue">
            <option value="Pump">Pump</option>
            <option value="Compressor">Compressor</option>
            <option value="Electrical motor">Electrical motor</option>
            <option value="Transformer">Transformer</option>
            <option value="Breakers and Power panels">
              Breakers and Power panels
            </option>
            <option value="Tanks">
                Tanks
            </option>
            <option value="Vessels">
                Vessels
            </option>
            <option value="Heat Exchangers">
                Heat Exchangers
            </option>
            <option value="Hydraulic machines">
                Hydraulic machines
            </option>
          </select>
        </div>

        {/*  */}
        <div className="relative w-full lg:max-w-sm">
          <h1 className=" text-light-blue text-center pb-2 ">
            Chose the Maintenance Type
          </h1>
          <select name="MaintenanceType" onChange={handleInput} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-light-blue">
            <option value="Regular Preventative Maintenance">
              Regular Preventative Maintenance
            </option>
            <option value="Predictive Maintenance">
              Predictive Maintenance
            </option>
            <option value="Emergency Maintenance">
                Emergency Maintenance
            </option>
            <option value="Urgent Maintenance">
                Urgent Maintenance
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Maintanance;
