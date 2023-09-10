import { useParams } from "react-router-dom"
import Nav from "../Components/Nav"
import axios from "axios"
import { useState, useEffect } from "react";

function SupervisorReport() {
    const {id} = useParams()
    
      const [taskApi, setTaskApi] = useState({
        supervisorName: "",
        type: "",
        factory: "",
        report: "",
      });
      useEffect(() => {
        axios
          .get(`https://64f8e5cc824680fd21802e48.mockapi.io/FactoryReport/${id}`)
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
                    <h1 className="w-4/12 h-10 bg-white text-center py-1 px-8 rounded-xl mt-7 text-gray-700">{taskApi.factory}</h1>
                    <textarea
                    className=" w-5/6 h-4/6 px-4 resize-none"
                    placeholder="Write the report here..."
                    value={taskApi.report}
                    />   
                    <div className="w-full flex justify-evenly">
                        <div className="flex w-1/2 justify-evenly">
                            <h1>supervisorName :</h1>
                            <h1 className="w-5/12 h-7 bg-white text-center  rounded-xl   text-gray-700">{taskApi.supervisorName}</h1>
                        </div>  
                        <div className="flex w-1/2 justify-evenly">
                            <h1>type :</h1>
                            <h1 className="w-5/12 h-7 bg-white text-center  rounded-xl  text-gray-700">{taskApi.type}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
    }

export default SupervisorReport