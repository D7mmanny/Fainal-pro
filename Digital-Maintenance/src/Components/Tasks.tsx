import React from "react";
import TaskProps from "./TaskProps";
import axios from "axios";
import TechnicianInspection from "../Components/TechnicianInspection";
import TechnicianMaintuinance from "./TechnicianMaintuinance";
import Null from "./Null";

function Tasks() {
  type task = {
    id: string;
    OperationType: string;
    Equipment: string;
    MaintenanceType: string;
    Factory: string;
    Lab: string;
    Technician: string;
    OperationStatus: string;
  };

  //localsrorage
  const name = localStorage.getItem("username");

  //state
  const [taskApi, setTaskApi] = React.useState<task[]>([]);
  const [taskDetails, setTaskDetails] = React.useState("Null");
  const [taskTitle, setTaskTaitle] = React.useState(
    localStorage.getItem("taskLab")
  );

  //get Task Api info
  React.useEffect(() => {
    axios
    .get("https://64f8e3b3824680fd21802caf.mockapi.io/Task")
    .then((response) => {
      setTaskApi(response.data);
    });
  }, [taskTitle]);


  return (

   <div className="flex justify-center w-screen mb-5">
     <div className="flex flex-col h-5/6 lg:flex-row w-10/12 bg-myGray rounded-3xl lg:h-full p-3 ">
      <div className="h-2/6 lg:w-2/3  ">
        <div className=" Tasks flex flex-col gap-1 drop-shadow-sm px-4 rounded-xl overflow-auto ">
          {taskApi.map((task) => {
            if (task.Technician == name) {
              return (
                <a
                  className="cursor-pointer"
                  onClick={() => {
                    if (task.OperationStatus != "Complete") {
                      setTaskDetails(task.OperationType);
                      localStorage.setItem("taskDetails", task.OperationType);
                      localStorage.setItem("taskId", task.id);
                      localStorage.setItem("taskLab", task.Lab);
                      setTaskTaitle(task.Lab);
                      localStorage.setItem("Equipment", task.Equipment);
                      localStorage.setItem(
                        "MaintenanceType",
                        task.MaintenanceType);  
                    } else{
                      localStorage.setItem("taskDetails" , "Null")
                      setTaskDetails("Null");
                    }
                  }}
                >
                  <TaskProps
                    OperationType={task.OperationType}
                    Equipment={task.Equipment}
                    MaintenanceType={task.MaintenanceType}
                    Factory={task.Factory}
                    Lab={task.Lab}
                    OperationStatus={task.OperationStatus}
                  />
                </a>
              );
            }
          })}
        </div>
      </div>
      <div className=" w-full h-4/6 lg:h-full flex justify-center p-3 lg:p-0">
        {taskDetails == "Inspection" && <TechnicianInspection />}
        {taskDetails == "Maintanance" && <TechnicianMaintuinance />}
        {taskDetails == "Null" && <Null/>}
      </div>
    </div>
   </div>
  );
}

export default Tasks;
