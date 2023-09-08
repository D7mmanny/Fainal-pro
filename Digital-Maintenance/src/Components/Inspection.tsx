import React from "react";
import axios from 'axios'
import TechnicianName from '../Components/TechnicianName'
function Inspection() {

  const[technicianName , setTechnicianName] = React.useState("")
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
        <div>
        </div>
          <div className="flex flex-col gap-5   ">
            <div className="flex">
          <h1 className=' ml-3 text-xl pb-3 '>the Technician: </h1>
          <h1 className=' ml-1 text-xl pb-3 text-light-blue '>{technicianName}</h1>
          </div>
            <div className=" overflow-x-auto h-56 flex flex-col items-center ">
              {user.map((user) => {
                if (user.type == "Technician")
                  return (
                    <>
                    <a onClick={()=>{
                      localStorage.setItem("technicianName" , user.username)
                      setTechnicianName(user.username)
                      }}>
                    <TechnicianName name ={user.username}/>
                    </a>
                    </>
                  );
              })}
            </div>
          </div>

      </div>
  );
}

export default Inspection;
