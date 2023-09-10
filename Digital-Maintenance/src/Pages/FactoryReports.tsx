import axios from "axios";
import user from '../assets/user.svg'
// import AllFactoryReports from "../Components/AllFactoryReports";
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
    <div>
      <div>
        <Nav />
      </div>
      <section className="container mx-auto p-6 font-mono">
      <div className="w-full flex justify-between items-center py-5">
            <h1 className="pl-3 text-2xl ">Factory Reports</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-7 h-7 mr-4 cursor-pointer"
              onClick={()=>{nav("/HomeManager")}}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>

        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Factory </th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Report</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {taskApi.map((task) => {
                  return (
                    // <AllFactoryReports
                    //   id={task.id}
                    //   supervisorName={task.supervisorName}
                    //   type={task.type}
                    //   factory={task.factory}
                    //   report="show details"
                    // />
                    <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img className="object-cover w-full h-full rounded-full" src={user} alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-black">{task.supervisorName}</p>
                          <p className="text-xs text-gray-600">supervisor</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-md font-semibold border">{task.factory} Factory </td>
                    <td className="px-4 py-3 text-xs border">
                      <div className="flex justify-center items-center">
                      {task.type =="Monthly report" && <h4 className="bg-green-100 text-green-600 rounded-full p-2 w-3/6 text-center">Monthly report</h4>}
                            {task.type =="Shutdown" && <h4 className="bg-red-100 text-red-600 rounded-full p-2 w-3/6 text-center">Shutdown</h4>} 
                      </div>
                           
                    </td>
                    <td className="px-4 py-3 text-sm border"><a href={`/FactoryReports/${task.id}`}>{task.report}</a></td>
                  </tr>
                  );
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FactoryReports;
