import React from "react";
import TaskProps from "./TaskProps";
import axios from "axios";

function Tasks() {
  type task = {
    id:string,
    OperationType: string;
    Equipment: string;
    MaintenanceType: string;
    Factory:string;
    Lab:string;
  };
  //state
  const [taskApi, setTaskApi] = React.useState<task[]>([]);
  const [taskDetails, setTaskDetails] = React.useState("");

  //get Task Api info
  React.useEffect(() => {
    axios
      .get("https://64f8e3b3824680fd21802caf.mockapi.io/Task")
      .then((response) => {
        setTaskApi(response.data);
      });
  }, []);

  return (
    <div className="flex gap-24">
      <div className="Tasks flex flex-col gap-4 py-5 bg-myGray drop-shadow-sm px-4 rounded-xl mb-5 overflow-auto">
        {taskApi.map((task) => (
          <a
            className="  cursor-pointer"
            onClick={() => {
              setTaskDetails(task.OperationType)
              localStorage.setItem("taskDetails", task.OperationType);
              localStorage.setItem("taskId",task.id)
              localStorage.setItem("taskLab",task.Lab)
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
        ))}
      </div>

      {taskDetails == "Inspection" && <h1>Inspection</h1>}
      {taskDetails == "Maintanance" && <h1>Maintanance</h1>}
    </div>
  );
}

export default Tasks;
