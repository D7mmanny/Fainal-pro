import React from 'react'

//components
// import React from 'react'
import Nav from '../Components/Nav'
import NewTask from '../Components/NewTask'
import NewReport from '../Components/NewReport'
import Shutdown from '../Components/Shutdown'
import TechnicianName from '../Components/TechnicianName'
import axios from 'axios'


function HomeSupervisor() {
    type ApiUser={
        id:string,
        username:string,
        email:string,
        idUser:string,
        type:string,
        Factory:string,
    }

  

    let TechName;

    const [active , setActive] = React.useState("")

const[user,setUser]=React.useState<ApiUser[]>([])

React.useEffect(() => {
    axios.get("https://64f8e5cc824680fd21802e48.mockapi.io/Users")
    .then((res) => {
        setUser(res.data)
    })
},[])

console.log(user);


 




    
  return (
    <div >
        {/* Nave */}
        <div>
        <Nav/>
        </div>
        
        {/* Supervisor Panel */}
        <div className='flex flex-col items-center gap-10 '>
        <h1 className='w-7/12 text-2xl mt-14'>Supervisor Panel</h1>
        <div className='w-8/12 h-full pb-20 shadow-2xl flex flex-col gap-9 justify-center items-center'>
            <div className='flex gap-32 text-light-blue mt-8'>  
                    <button 
                    className='py-3 px-12 rounded-full shadow-lg bg-myGray hover:bg-gray-200'
                    onClick={()=>{setActive("newTask")}}>
                        new task +
                    </button>
                    
             
                
                    <button 
                    className='py-3 px-12 rounded-full shadow-lg bg-myGray hover:bg-gray-200'
                    onClick={()=>{setActive("newReport")}}
                    >new report +</button>
            

                
                    <button 
                    className='py-3 px-12 rounded-full shadow-lg bg-myGray hover:bg-gray-200'
                     onClick={()=>{setActive("shutdown")}}
                    > Shutdown</button>

            </div>

            {/* Components */}
            {active == "newTask" && <NewTask/>}
            {active == "newReport" && <NewReport/>}
            {active == "shutdown" && <Shutdown/>}
            
        </div>

        <div className='flex w-96 flex-col gap-5 h-60 overflow-x-auto'>
        {
            user.map( (user)=>{
                if(user.type== "Technician")
                return(
                    <>
                        <TechnicianName name={user.username}/>
                    </>
                )
                    
                
                
                })
        }
        </div>
        <div>
            
        </div>
            
        </div>

      

    </div>
  )
}

export default HomeSupervisor