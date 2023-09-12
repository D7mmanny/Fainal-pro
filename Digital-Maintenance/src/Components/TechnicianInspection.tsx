import axios from "axios"
import {useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";


function TechnicianInspection() {
    const taskid = localStorage.getItem("taskId")
    const taskTital= localStorage.getItem("taskLab")
    const[erorr,setErorr]=useState("")
    const [report,setReport]=useState({
        report:"",
        dayDate:"",
        NextDate:"",
        OperationStatus:""
    })

    const handleInput = (e:React.ChangeEvent<HTMLTextAreaElement> |React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setReport({ ...report, [e.target.name]: e.target.value });
    };

   

    const submitReport = () => {
        if(report.report == "" ||report.dayDate =="" ||report.NextDate==""){
            setErorr("empty")
        }else{
            axios.put(`https://64f8e3b3824680fd21802caf.mockapi.io/Task/${taskid}`,{
                report:report.report,
                dateOfCompletion:report.dayDate,
                NextOperation:report.NextDate,
                OperationStatus:"Complete"
            })
            //alert
       toast.success('The task has been sent successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
            setTimeout(function(){
                window.location.reload();
             }, 2000);
        }

    }

        console.log(erorr);
        
    return (
        <div className="w-full xl:w-9/12 h-full  p-5 ">
        <div className=" h-full  border  flex flex-col items-center gap-10 rounded-xl pb-6 bg-white">
        <h1 className="h-10 w-6/12 text-center text-3xl underline font-bold decoration-1 mt-7 text-gray-700 ">
            {taskTital}</h1>

            <div className="w-full flex gap-1">
            <div className=" w-1/2 text-center flex flex-col items-end ">
            <h4 className=" w-10/12">Current Inspection date</h4>
            <input
                name="dayDate"
                type="date"
                min="2023-09-02"
                onChange={handleInput}
                className="text-center h-10  rounded-xl  text-gray-700 w-10/12 border-2"
            />
        </div>

        <div className="w-1/2 text-center flex flex-col content-start">
            <h4 className=" w-10/12">Next Inspection date</h4>
            <input
                name="NextDate"
                type="date"
                min="2023-09-02"
                onChange={handleInput}
                className="text-center h-10  rounded-xl  text-gray-700 w-10/12 border-2"
            />
        </div>
            </div>
        <textarea
            name="report"
            className=" w-5/6 h-96 px-4 resize-none border-2"
            placeholder="Write the report here..."
            onChange={handleInput}
        />
 
        

        <button
            className=" bg-light-blue py-1 px-7 rounded-xl text-white"
            onClick={submitReport}
        >
            Submit
        </button>
        </div>
        <ToastContainer />  
    </div>
    )
    }

export default TechnicianInspection