import axios from "axios";
import AllFactoryReports from "../Components/AllFactoryReports";
import Nav from "../Components/Nav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FactoryReports() {
    const nav = useNavigate();
    type task = {
      id: string;
      supervisorName: string;
      type: string;
      factory: string;
      report: string;
      
      
    };
    const [taskApi, setTaskApi] = useState<task[]>([]);
    useEffect(() => {
      axios
        .get("https://64f8e5cc824680fd21802e48.mockapi.io/FactoryReport")
        .then((response) => {
          setTaskApi(response.data);
        });
    }, []);
  
    return (
      <div >
        <div>
          <Nav />
        </div>
        <div className="p-10 h-screen flex flex-col items-center gap-8">
          <div className="w-10/12 flex justify-between items-center ">
            <h1 className="pl-3 text-4xl ">Factory Reports</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-7 h-7 mr-7 cursor-pointer"
              onClick={()=>{nav("/HomeManager")}}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className=" shadow-2xl w-10/12 h-5/6 ">
            <div className=" mt-5 mx-5 h-5/6 border-solid border-2 border-gray-500 overflow-auto ">
              <div className="border-solid border-b-2 flex border-gray-500 shadow-2xl sticky  top-0 ">
                <h4 className="bg-gray-300 w-1/5 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center">
                Supervisor name
                </h4>
                <h4 className="bg-gray-300 w-1/5 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center">
                Type
                </h4>
                <h4 className="bg-gray-300 w-1/5 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center">
                Factory
                </h4>
                
                <h4 className="bg-gray-300 w-2/5 h-14 flex justify-center items-center">
                  Report
                </h4>
              </div>
              <div>
                {taskApi.map((task) => {
                  return (
                    <AllFactoryReports
                    id={task.id}
                    supervisorName={task.supervisorName}
                    type={task.type}
                    factory={task.factory}
                      report="show details"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default FactoryReports