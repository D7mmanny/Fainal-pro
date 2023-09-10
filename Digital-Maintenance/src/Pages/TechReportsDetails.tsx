import { useParams } from "react-router-dom"
import Nav from "../Components/Nav"
import axios from "axios"
import { useState, useEffect } from "react";

function TechReportsDetails()  {
    const {id} = useParams()
    
      const [taskApi, setTaskApi] = useState({
        Technician: "",
        OperationStatus: "",
        Lab: "",
        OperationType:"",
        report: "",
        MaintenanceType:"",
        dateOfCompletion:"",
        NextOperation:""
      });
      useEffect(() => {
        axios
          .get(`https://64f8e3b3824680fd21802caf.mockapi.io/Task/${id}`)
          .then((response) => {
            setTaskApi(response.data);
            console.log(taskApi);
            
          });
      }, []);
    
    return (
        
        <div className="h-screen">
            <div className="1/6">
                <Nav/>
            </div>
            
            
            <div className=" h-full flex justify-center items-center ">
                <div className=" bg-myGray border w-5/12 h-5/6 flex flex-col items-center gap-10 rounded-xl pb-6">
                    <h1 className="w-4/12 h-10 bg-white text-center py-1 px-8 rounded-xl mt-7 text-gray-700">{taskApi.Lab}</h1>
                    <textarea
                    className=" w-5/6 h-4/6 px-4 resize-none"
                    placeholder="Write the report here..."
                    value={taskApi.report}
                    />   
                    <div className="w-full flex justify-evenly">
                        <div className="flex w-1/2 justify-evenly">
                            <h1>Technician :</h1>
                            <h1 className="w-5/12 h-7 bg-white text-center  rounded-xl   text-gray-700">{taskApi.Technician}</h1>
                        </div>  
                        <div className="flex w-1/2 justify-evenly">
                            <h1>OperationStatus :</h1>
                            <h1 className="w-5/12 h-7  text-center">
                            {taskApi.OperationStatus =="Complete" && <h4 className="bg-green-100 text-green-600 rounded-full ">Complete</h4>}
                            {taskApi.OperationStatus !="Complete" && <h4 className="bg-red-100 text-red-600 rounded-full ">Incomplete</h4>}
                                </h1>
                        </div>
                        
                    </div>
                    <div className="w-full flex justify-evenly">
                        <div className="flex w-1/2 justify-evenly">
                            <h1>OperationType :</h1>
                            <h1 className="w-5/12 h-7 bg-white text-center  rounded-xl   text-gray-700">{taskApi.OperationType}</h1>
                        </div>  
                        <div className="flex w-1/2 justify-evenly">
                            <h1>MaintenanceType :</h1>
                            <h1 className="w-5/12 h-7 bg-white text-center  rounded-xl  text-gray-700">{taskApi.MaintenanceType}</h1>
                        </div>
                        
                    </div>
                    <div className="w-full flex justify-evenly">
                        <div className="flex w-1/2 justify-evenly">
                            <h1>dateOfCompletion :</h1>
                            <h1 className="w-5/12 h-7 bg-white text-center  rounded-xl   text-gray-700">{taskApi.dateOfCompletion}</h1>
                        </div>  
                        <div className="flex w-1/2 justify-evenly">
                            <h1>NextOperation :</h1>
                            <h1 className="w-5/12 h-7 bg-white text-center  rounded-xl  text-gray-700">{taskApi.NextOperation}</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    
    )
    }


export default TechReportsDetails