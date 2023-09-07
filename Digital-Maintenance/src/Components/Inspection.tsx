import React from "react";
import axios from 'axios'
import TechnicianName from '../Components/TechnicianName'
function Inspection() {
    type ApiUser={
        id:string,
        username:string,
        email:string,
        idUser:string,
        type:string,
        Factory:string,
    }
    
const[user,setUser]=React.useState<ApiUser[]>([])

React.useEffect(() => {
    axios.get("https://64f8e5cc824680fd21802e48.mockapi.io/Users")
    .then((res) => {
        setUser(res.data)
    })
},[])

console.log(user);

  return (
    <div>
        <div className="">
        </div>
          <div className="flex w-96  flex-col gap-5  ">
            <h1 className="text-center text-2xl ">Chose the Technician</h1>
            <div className=" overflow-x-auto h-72 flex flex-col items-center ">
              {user.map((user) => {
                if (user.type == "Technician")
                  return (
                    <>
                      <TechnicianName name ={user.username} />
                    </>
                  );
              })}
            </div>
          </div>

      </div>
  );
}

export default Inspection;
