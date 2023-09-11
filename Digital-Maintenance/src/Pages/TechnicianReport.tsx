import axios from "axios";
import AllReport from "../Components/AllReport";
import user from "../assets/user.svg";
import Nav from "../Components/Nav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TechReportComponant from "../Components/TechReportComponant";

function TechnicianReport() {
  const nav = useNavigate();
  type task = {
    id: string;
    Technician: string;
    OperationStatus: string;
    Lab: string;
    OperationType: string;
    report: string;
  };
  const [taskApi, setTaskApi] = useState<task[]>([]);
  useEffect(() => {
    axios
      .get("https://64f8e3b3824680fd21802caf.mockapi.io/Task")
      .then((response) => {
        setTaskApi(response.data);
      });
  }, []);

  // popUp
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

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
            onClick={() => {
              nav("/HomeSup");
            }}
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
                  <th className="px-4 py-3">Technican name</th>
                  <th className="px-4 py-3">Lab</th>
                  <th className="px-4 py-3">Task type</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Report</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {taskApi.map((task) => {
                  return (
                    <tr className="text-gray-700">
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div className="relative w-8 h-8 mr-3 rounded-full">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src={user}
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold text-black">
                              {task.Technician}
                            </p>
                            <p className="text-xs text-gray-600">Technician</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-md font-semibold border">
                        {task.Lab}
                      </td>
                      <td className="px-4 py-3 text-md font-semibold border">
                        {task.OperationType}
                      </td>
                      <td className="px-4 py-3 text-xs border">
                        <div className="flex justify-center items-center">
                          {task.OperationStatus == "Complete" && (
                            <h4 className="bg-green-100 text-green-600 rounded-full p-2 w-3/6 text-center">
                              Complete
                            </h4>
                          )}
                          {task.OperationStatus != "Complete" && (
                            <h4 className="bg-red-100 text-red-600 rounded-full p-2 w-3/6 text-center">
                              InComplete
                            </h4>
                          )}
                        </div>
                      </td>

                      <td className="px-4 py-3 text-sm border w-1/4 h-1/4">
                        <a
                          className="flex items-center justify-between hover:text-light-blue cursor-pointer"
                          onClick={()=>{
                            setModal(!modal);
                            localStorage.setItem("taskId",task.id)
                          }}
                        >
                          {" "}
                          Show Report
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-4 h-3"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  );
                })}
                {modal && (
                  <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content ">
                      <TechReportComponant/>
                      <button className="close-modal" onClick={toggleModal}>
                        CLOSE
                      </button>
                    </div>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnicianReport;
