import React from "react";
import Inspection from "./Inspection";
import NewTask from "./NewTask";
import Maintanance from "./Maintanance";

function OperationType() {
  const [active, setActive] = React.useState("");

  //sendInspection
  const sendInspection = () => {
    
    //post
    //alert
  };

  //sendMaintanance
  const sendMaintanance = () =>{
    //post
    //alert
  }
  return (
    <div>
      <div className="flex h-14 text-xl ">
        <a
          className=" bg-myGray w-1/2 h-full  flex justify-center items-center rounded-l-xl cursor-pointer hover:bg-gray-200 "
          onClick={() => {
            setActive("Inspection");
          }}
        >
          Inspection
        </a>
        <a
          className="bg-myGray w-1/2 h-full text-center flex justify-center items-center rounded-r-xl cursor-pointer hover:bg-gray-200"
          onClick={() => {
            setActive("Maintenance");
          }}
        >
          Maintenance
        </a>
      </div>

      {active == "Inspection" && (
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex justify-center items-center gap-7 mt-8">
            <Inspection />
            <NewTask />
          </div>
          <button
            className=" bg-light-blue py-2 px-9 rounded-xl text-white hover:bg-sky-600"
            onClick={sendInspection}
          >
            Submit
          </button>
        </div>
      )}

      {active == "Maintenance" && (
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex justify-center items-center gap-7 mt-8">
            <Inspection />
            <NewTask />
          </div>
          <Maintanance/>
          <button
            className=" bg-light-blue py-2 px-9 rounded-xl text-white hover:bg-sky-600"
            onClick={sendMaintanance}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default OperationType;
