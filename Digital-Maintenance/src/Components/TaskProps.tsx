// import React from "react";

interface Itask {
  OperationType: string;
  Equipment: string;
  MaintenanceType: string;
  Factory: string;
  Lab: string;
  OperationStatus: string;
  date:string;
}

function TaskProps(props: Itask) {
 
  return (
    <div>
      {props.OperationType == "Inspection" && props.OperationStatus!="Complete" && (
        <div className="flex h-40 bg-InspectLightYelow w-full lg:w-full rounded-xl justify-start items-center gap-2">
          <div className=" py-14 px-1 h-40 bg-InspectDarkYelow" />
          <div className="flex flex-col w-full items-center justify-evenly h-full  ">
            <p className="text-xs ml-7 mb-3 w-10/12">{props.date}</p>
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
        <div className=" flex h-40 bg-MaintananceLightGreen w-full lg:w-full rounded-xl justify-start items-center gap-2">
          <div className=" py-14 px-1 h-40 bg-MaintananceDarkGreen" />
          <div className="flex flex-col items-center justify-evenly h-full w-full">
            <p className="text-xs ml-7 mb-3 w-10/12"> {props.date}</p>
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
        
        </div>

  );
}

export default TaskProps;
