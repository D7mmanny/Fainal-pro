import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

function TechnicianMaintuinance() {
    

  const taskid = localStorage.getItem("taskId");
  const taskTital = localStorage.getItem("taskLab");
  const MaintenanceType = localStorage.getItem("MaintenanceType");
  const Equipment = localStorage.getItem("Equipment");
  const [report, setReport] = useState({
    report: "",
    dayDate: "",
    NextDate: "",
    EquipmentStatus: "",
    OperationStatus: "",
  });

  const handleInput = (e:React.ChangeEvent<HTMLTextAreaElement> |React.ChangeEvent<HTMLInputElement> ) => {
    e.persist();
    setReport({ ...report, [e.target.name]: e.target.value });
  };


  const submitReport = () => {
    if (report.report == "" || report.dayDate == "" || report.NextDate == "") {
      toast.info('Please fill the empty field', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      axios.put(`https://64f8e3b3824680fd21802caf.mockapi.io/Task/${taskid}`, {
        report: report.report,
        dateOfCompletion: report.dayDate,
        NextOperation: report.NextDate,
        EquipmentStatus: report.EquipmentStatus,
        OperationStatus: "Complete",  
    });
    //alert
    toast.success('The task has been sent successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    setTimeout(function(){
        window.location.reload();
     }, 2000);
    }
  };


  return (
    <div className="w-full xl:w-9/12 h-full  p-5  ">
      <div className="h-full bg-white border  flex flex-col items-center gap-12 rounded-xl pb-6 ">
        <h1 className=" h-10 w-6/12 text-center text-3xl underline font-bold decoration-1 mt-7 text-gray-700">{taskTital}</h1>
      
        <div className=" w-full flex justify-evenly text-center gap-2 ">
          <div className="w-1/2 flex flex-col gap-2 items-end">
          <h3 className="w-10/12">Equipment</h3>
          <h4 className="text-center h-10  rounded-xl  text-gray-700 w-10/12 border-2">{Equipment}</h4>
          </div>
        
          <div className="w-1/2 flex flex-col gap-2">
          <h3 className="w-10/12 ">Maintenance type</h3>
          <h4 className="text-center h-10  rounded-xl  text-gray-700 w-10/12 border-2">{MaintenanceType}</h4>
          </div>
        </div>
        
        <div className="flex w-full text-center gap-2">

          <div className="flex flex-col  justify-between w-1/2 items-end">
            <h4 className="w-10/12">Current maintenance date</h4>
            <input
              name="dayDate"
              type="date"
              min="2023-09-02"
              onChange={handleInput}
              className="text-center h-10  rounded-xl  text-gray-700 w-10/12 border-2"
            />
          </div>

          <div className="flex flex-col justify-between w-1/2 items-start">
            <h4 className="w-10/12">Next maintenance date</h4>
            <input
              name="NextDate"
              type="date"
              min="2023-09-02"
              onChange={handleInput}
              className="text-center h-10  rounded-xl  text-gray-700 w-10/12 border-2"
            />

          </div>
        </div>
        <div className="flex w-5/6 gap-14">
        <h4>Equipment condition:</h4>
          <div>
            <input
              className=""
              type="radio"
              name="EquipmentStatus"
              value={"Intact"}
              onChange={handleInput}
            />
            <label>Intact</label>
          </div>
          <div>
            <input
              type="radio"
              name="EquipmentStatus"
              value={"broken"}
              onChange={handleInput}
            />
            <label>broken</label>
          </div>
        </div>
        <div className="w-5/6">
          <h4>Notes</h4>
          <textarea
            name="report"
            className=" w-full h-48  p-2 resize-none border-2"
            placeholder="Write the report here..."
            onChange={handleInput}
          />
        </div>

        <button
          className=" bg-light-blue py-1 px-7 rounded-xl text-white"
          onClick={submitReport}
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default TechnicianMaintuinance;
