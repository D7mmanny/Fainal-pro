// import React from "react";

interface Itask {
  OperationType: string;
  Equipment: string;
  MaintenanceType: string;
  Factory:string;
  Lab:string
  OperationStatus:string;
}

function TaskProps(props: Itask) {
  return (
    <div >
      {props.OperationType == "Inspection" && props.OperationStatus!="Complete" && (
        <div className="flex bg-InspectLightYelow w-full lg:w-full rounded-xl justify-start items-center gap-2">
          <div className=" py-14 px-1 bg-InspectDarkYelow" />
          <div className="flex flex-col w-full items-center ">
            <p className="text-xs ml-7 mb-3 w-10/12"> 2023/9/08</p>
            <li className="text-xl w-11/12">{props.OperationType}</li>
            <div className="flex justify-between ml-7 mt-3 w-10/12">
              <p className="text-xs"> <b>Factory:</b>  {props.Factory}</p>
              <p className="text-xs">
                {" "}
                {props.Lab}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.OperationType == "Maintanance" && props.OperationStatus!="Complete" && (
        <div className=" flex bg-MaintananceLightGreen w-full lg:w-full rounded-xl justify-start items-center gap-2">
          <div className=" py-14 px-1 bg-MaintananceDarkGreen" />
          <div className="flex flex-col items-center w-full">
            <p className="text-xs ml-7 mb-3 w-10/12"> 2023/9/08</p>
            <li className="text-xl w-11/12 ">{props.OperationType}</li>
            <div className="flex  justify-between ml-7 mt-3 w-10/12 ">
              
                  <p className="text-xs text-center "><b> Equipment:</b>    {props.Equipment}</p>
                  
              
              <p className="text-xs text-center">
                {" "}
                 <b>Maintenance Type:</b>  {props.MaintenanceType}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* { props.OperationStatus == "Complete" && (
        <div className=" flex bg-gray-200 w-96 rounded-xl justify-start items-center gap-2">
          <div className=" py-14 px-1 bg-gray-400" />
          <div className="flex flex-col">
            <div className=" flex text-xs justify-between">
            <p className="text-xs ml-7 mb-3"> 2023/9/08</p>
            <p className=" flex ">Done</p>
            </div>
            <li className="text-xl ">{props.OperationType}</li>
            <div className="flex gap-32 ml-7 mt-3 ">
              <p className="text-xs text-center"> Equipment:<br/>  {props.Equipment}</p>
              <p className="text-xs text-center">
                {" "}
                Maintenance Type: <br/> {props.MaintenanceType}
              </p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default TaskProps;
