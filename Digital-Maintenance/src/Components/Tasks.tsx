import React from "react";
import TaskProps from "./TaskProps";
import axios from "axios";
import TechnicianInspection from '../Components/TechnicianInspection'
import TechnicianMaintuinance from "./TechnicianMaintuinance";


function Tasks() {
  type task = {
    id:string,
    OperationType: string;
    Equipment: string;
    MaintenanceType: string;
    Factory:string;
    Lab:string;
    Technician:string;
  };

  //localsrorage
  const name = localStorage.getItem("username");

  //state
  const [taskApi, setTaskApi] = React.useState<task[]>([]);
  const [taskDetails, setTaskDetails] = React.useState("Inspection");

  //get Task Api info
  React.useEffect(() => {
    axios
      .get("https://64f8e3b3824680fd21802caf.mockapi.io/Task")
      .then((response) => {
        setTaskApi(response.data);
      });
  }, []);

  return (
    <div className="flex gap-24 w-full " >
      <div className="h-full">
      <div className=" Tasks flex flex-col gap-4 py-5 bg-myGray drop-shadow-sm px-4 rounded-xl mb-5 overflow-auto">
        {taskApi.map((task) => {
          if(task.Technician == name){
            return(
              <a
            className="  cursor-pointer"
            onClick={() => {
              setTaskDetails(task.OperationType)
              localStorage.setItem("taskDetails", task.OperationType);
              localStorage.setItem("taskId",task.id)
              localStorage.setItem("taskLab",task.Lab)
              localStorage.setItem("Equipment",task.Equipment)
              localStorage.setItem("MaintenanceType",task.MaintenanceType)
            }}
          >
            
            <TaskProps
              OperationType={task.OperationType}
              Equipment={task.Equipment}
              MaintenanceType={task.MaintenanceType}
              Factory={task.Factory}
              Lab={task.Lab}
            />
          </a>
            )
         }
        }
          
        )}
      </div>
      </div>
      <div className="w-full h-full flex justify-center">
        {taskDetails == "Inspection" && <TechnicianInspection/>}
        {taskDetails == "Maintanance" && <TechnicianMaintuinance/>}
      </div>
     
    </div>
  );
}

export default Tasks;
