import React from 'react'
import axios from "axios";

function SuperReportComponent() {
    type task = {
        id: string;
        supervisorName: string;
        type: string;
        factory: string;
        report: string;
      };
      const [taskApi, setTaskApi] = React.useState<task[]>([]);
      const taskId = localStorage.getItem("taskId")

      React.useEffect(() => {
        axios
          .get("https://64f8e5cc824680fd21802e48.mockapi.io/FactoryReport")
          .then((response) => {
            setTaskApi(response.data);
          });
      }, []);


  return (
    <>
         {taskApi.map((task) => {
            if(taskId == task.id){
                console.log("success");
                
                return (
                    <> 
                    <h1>{task.factory}</h1>
                    <p>{task.report}</p>
                    </>
                )  
            }})}
        
    </>
  )
}

export default SuperReportComponent