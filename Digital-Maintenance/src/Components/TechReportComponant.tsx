import React from "react";
import axios from "axios";

function TechReportComponant() {
  type task = {
    id: string;
    Technician: string;
    OperationStatus: string;
    Lab: string;
    OperationType: string;
    report: string;
  };
  const [taskApi, setTaskApi] = React.useState<task[]>([]);
  const taskId = localStorage.getItem("taskId");
  React.useEffect(() => {
    axios
      .get("https://64f8e3b3824680fd21802caf.mockapi.io/Task")
      .then((response) => {
        setTaskApi(response.data);
      });
  }, []);

  return (
    <div>
      {taskApi.map((task) => {
        if (taskId == task.id) {
          console.log("success");

          return (
            <>
              <h1>{task.Lab}</h1>
              <h1>{task.Technician}</h1>
              <p>{task.report}</p>
            </>
          );
        }
      })}
    </div>
  );
}

export default TechReportComponant;
