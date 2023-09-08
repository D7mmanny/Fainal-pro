import {useState} from "react"
interface allstat{
    Technician:string;
    OperationStatus:string,
    Lab:string,
    OperationType:string,
    report:string,


}
function AllReport(props:allstat) {
    
    

  return (
    <div >
        <div className='border-solid border-b-2 flex border-gray-500 shadow-2xl '>
            <h4 className='bg-white w-1/6 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>{props.Technician}</h4>
            <h4 className='bg-white w-1/6 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>
                {props.OperationStatus =="Complete" && <h4 className="bg-green-100 text-green-600 rounded-full p-2">Complete</h4>}
                {props.OperationStatus !="Complete" && <h4 className="bg-red-100 text-red-600 rounded-full p-2">Incomplete</h4>}
                 </h4>
            <h4 className='bg-white w-1/6 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>{props.Lab}</h4>
            <h4 className='bg-white w-1/6 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>{props.OperationType}</h4>
            <h4 className='bg-white w-2/6 h-14 flex justify-center items-center'>{props.report}</h4>
        </div>
    </div>
  )
}

export default AllReport