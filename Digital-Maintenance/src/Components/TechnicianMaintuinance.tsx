import axios from "axios";
import React from "react";
import { useState } from "react";

function TechnicianMaintuinance() {

  const taskid = localStorage.getItem("taskId");
  const taskTital = localStorage.getItem("taskLab");
  const MaintenanceType = localStorage.getItem("MaintenanceType");
  const Equipment = localStorage.getItem("Equipment");
  const [erorr, setErorr] = useState("");
  const [report, setReport] = useState({
    report: "",
    dayDate: "",
    NextDate: "",
    EquipmentStatus: "",
    OperationStatus: "",
  });

  const handleInput = (e) => {
    e.persist();
    setReport({ ...report, [e.target.name]: e.target.value });
  };


  const submitReport = () => {
    if (report.report == "" || report.dayDate == "" || report.NextDate == "") {
      setErorr("empty");
    } else {
      axios.put(`https://64f8e3b3824680fd21802caf.mockapi.io/Task/${taskid}`, {
        report: report.report,
        dateOfCompletion: report.dayDate,
        NextOperation: report.NextDate,
        EquipmentStatus: report.EquipmentStatus,
        OperationStatus: "Complete",  
    });
    }
  };

  console.log(erorr);

  return (
    <div className="w-3/5  ">
      <div className="h-full bg-myGray border  flex flex-col items-center gap-12 rounded-xl pb-6 ">
        <input
          name="title"
          value={taskTital + ""}
          className="text-center py-1 px-8 rounded-xl mt-7 text-gray-700"
        />
        <div className=" w-5/6 flex justify-evenly ">
          <input
            className="rounded-xl h-8 text-center"
            type="text"
            value={"" + Equipment}
          />

          <input
            className="rounded-xl h-8 text-center"
            type="text"
            value={"" + MaintenanceType}
          />
        </div>
        <h4>Equipment condition</h4>
        <div className="flex w-5/6 justify-evenly">
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

        <div className="flex justify-between w-5/6">
          <h4 className="">Current maintenance history</h4>
          <input
            name="dayDate"
            type="date"
            min="2023-09-02"
            onChange={handleInput}
            className="text-center  rounded-xl  text-gray-700"
          />
        </div>

        <div className="flex justify-between w-5/6">
          <h4 className="">Next maintenance date</h4>
          <input
            name="NextDate"
            type="date"
            min="2023-09-02"
            onChange={handleInput}
            className="text-center  rounded-xl  text-gray-700"
          />
        </div>
        <div className="w-5/6">
          <h4>Notes</h4>
          <textarea
            name="report"
            className=" w-full h-32 rounded-2xl p-2 resize-none"
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
    </div>
  );
}

export default TechnicianMaintuinance;
