import axios from 'axios';
import AllReport from '../Components/AllReport'
import Nav from '../Components/Nav'
import {useState,useEffect}from "react"

function TechnicianReport() {
    type task = {
        id:string;
        Technician:string;
        OperationStatus:string;
        Lab:string;
        OperationType:string;
        report:string;
      };
      const [taskApi, setTaskApi] = useState<task[]>([]);
      useEffect(() => {
        axios
          .get("https://64f8e3b3824680fd21802caf.mockapi.io/Task")
          .then((response) => {
            setTaskApi(response.data);
            
          });
      }, []);

  return (
    <div>
        <div>
        <Nav/>
        </div>
        <div className='p-10 h-screen'>
        <h1 className='pl-3 text-4xl '>Labs reports</h1>
        <div className=' shadow-2xl w-12/12 h-5/6 '>
            <div className=' m-5 h-5/6 border-solid border-2 border-gray-500 overflow-auto '>
                <div className='border-solid border-b-2 flex border-gray-500 shadow-2xl sticky  top-0 '>
                    <h4 className='bg-gray-300 w-1/6 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>Technician name</h4>
                    <h4 className='bg-gray-300 w-1/6 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>Status</h4>
                    <h4 className='bg-gray-300 w-1/6 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>Lab</h4>
                    <h4 className='bg-gray-300 w-1/6 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>Task type</h4>
                    <h4 className='bg-gray-300 w-2/6 h-14 flex justify-center items-center'>Report</h4>
                </div>
                <div>
                {
                    taskApi.map( (task) => {
                        return(
                            <AllReport
                            Technician={task.Technician} 
                            OperationStatus={task.OperationStatus} 
                            Lab={task.Lab} 
                            OperationType={task.OperationType}
                            report='show details'/>
                        )
                    })
                }
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TechnicianReport