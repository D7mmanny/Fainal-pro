import axios from "axios"
import {useState} from "react"



function TechnicianInspection() {
    const taskid = localStorage.getItem("taskId")
    const taskTital= localStorage.getItem("taskLab")
    const[erorr,setErorr]=useState("")
    const [report,setReport]=useState({
        report:"",
        dayDate:"",
        NextDate:"",
    })

    const handleInput = (e) => {
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
                NextOperation:report.NextDate
            })
        }

    }

        console.log(erorr);
        
    return (
        <div className="w-7/12 h-full ">
        <div className=" bg-myGray border w-6/6 h-4/5 flex flex-col items-center gap-5 rounded-xl pb-6">
        <input
            name="title"
            value={taskTital +" Inspection"}
            className="text-center py-1 px-8 rounded-xl mt-7 text-gray-700"
        />
        <textarea
            name="report"
            className=" w-5/6 h-96 px-4"
            placeholder="Write the report here..."
            onChange={handleInput}
        />
        <div className="flex justify-between w-5/6">
            <h4 className="">Current maintenance history</h4>
            <input
                name="dayDate"
                type="date"
                min="2023-09-02"
                onChange={handleInput}
                className="text-center  rounded-xl  text-gray-700"
            />
        </div>

        <div className="flex justify-between w-5/6">
            <h4 className="">Next maintenance date</h4>
            <input
                name="NextDate"
                type="date"
                min="2023-09-02"
                onChange={handleInput}
                className="text-center  rounded-xl  text-gray-700"
            />
        </div>
        

        <button
            className=" bg-light-blue py-1 px-7 rounded-xl text-white"
            onClick={submitReport}
        >
            Submit
        </button>
        </div>
        
    </div>
    )
    }

export default TechnicianInspection