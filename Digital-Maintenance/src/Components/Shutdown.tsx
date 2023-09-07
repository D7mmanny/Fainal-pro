import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Shutdown() {
  //state

  const [report, setReport] = React.useState("");

  //local storage
  const name = localStorage.getItem("username");
  const factory = localStorage.getItem("Factory");

  //post report
  const submitReport = () => {
    axios
      .post("https://64f8e5cc824680fd21802e48.mockapi.io/FactoryReport", {
        supervisorName: name,
        type: "Shutdown",
        factory: factory,
        report: report,
      })
      .then((response) => {
        console.log(response);
        setReport("")
        //alert
        toast.success("The Shutdown alert has been sent successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div className="w-7/12 ">
      <div className=" bg-myGray border w-6/6 h-4/5 flex flex-col items-center gap-5 rounded-xl pb-6">
        <input
          value={`${factory} Factory Shutdown`}
          className="text-center py-1 px-8 rounded-xl mt-7 text-gray-700"
        />
        <textarea
          className=" w-5/6 h-96 px-4"
          placeholder="Write the report here..."
          onChange={(e) => setReport(e.target.value)}
          value={report}
        />
        <button
          className=" bg-light-blue py-1 px-7 rounded-xl text-white"
          onClick={submitReport}
        >
          Shutdown
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Shutdown;
