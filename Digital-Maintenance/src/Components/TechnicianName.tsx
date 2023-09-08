import React from "react";
import User from "../assets/user.svg";

interface TechnicianName {
  name: string;
}
function TechnicianName(props: TechnicianName) {
 

  return (
    <div>
        <div className=" w-64">
          <button className=" ml-2 bg-myGray w-60 flex hover:bg-gray-300 active:bg-light-blue focus:bg-light-blue focus:text-white rounded-2xl mt-2 mb-1  items-center cursor-pointer text-light-blue">
            <img className=" w-12 p-2" src={User} alt="a" />
            {props.name}
          </button>
        </div>
    
    </div>
  );
}

export default TechnicianName;
