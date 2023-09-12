import React from "react";
import Inspection from "./Inspection";
import NewTask from "./NewTask";
import Maintanance from "./Maintanance";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OperationType() {
  const [active, setActive] = React.useState("");
  const [error, setErorr] = React.useState("");

  //sendInspection
  const sendInspection = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const data = {
      Technician: localStorage.getItem("technicianName"),
      Lab: localStorage.getItem("Lab"),
      Equipment: "",
      MaintenanceType: "",
      OperationType: "Inspection",
      report: "",
      EquipmentStatus: "",
      dateOfCompletion: "",
      NextOperation: "",
      OperationStatus: "",
      supervisor: localStorage.getItem("username"),
      Factory: localStorage.getItem("Factory"),
    };
    if (data.Technician == "" || data.Lab == "") {
      setErorr("There is something empty");
    } else {
      axios
        .post(`https://64f8e3b3824680fd21802caf.mockapi.io/Task`, data)
        .then((res) => {
          console.log(res);
          //alert
          toast.success("The task has been sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });

      setErorr("");
    }
    console.log(error);
  };

  //sendMaintanance
  const sendMaintanance = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const data = {
      Technician: localStorage.getItem("technicianName"),
      Lab: localStorage.getItem("Lab"),
      Equipment: localStorage.getItem("Equipment"),
      MaintenanceType: localStorage.getItem("MaintenanceType"),
      OperationType: "Maintanance",
      report: "",
      EquipmentStatus: "",
      dateOfCompletion: "",
      NextOperation: "",
      OperationStatus: "",
      supervisor: localStorage.getItem("username"),
      Factory: localStorage.getItem("Factory"),
    };
    if (
      data.Technician == "" ||
      data.Lab == "" ||
      data.Equipment == "" ||
      data.MaintenanceType == ""
    ) {
      setErorr("There is something empty");
    } else {
      axios
        .post(`https://64f8e3b3824680fd21802caf.mockapi.io/Task`, data)
        .then((res) => {
          console.log(res);
           //alert
           toast.success("The task has been sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })

        });

      setErorr("");
    }
    console.log(error);
  };
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
          <div className="flex justify-center items-center gap-10 mt-8">
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
          <div className="flex justify-center items-center gap-10 mt-8">
            <Inspection />
            <NewTask />
          </div>
          <Maintanance />
          <button
            className=" bg-light-blue py-2 px-9 rounded-xl text-white hover:bg-sky-600"
            onClick={sendMaintanance}
          >
            Submit
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default OperationType;
