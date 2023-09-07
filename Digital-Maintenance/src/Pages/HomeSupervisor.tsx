// import React from 'react'
import Nav from '../Components/Nav'
import NewTask from '../Components/NewTask'
import NewReport from '../Components/NewReport'
import TechnicianName from '../Components/TechnicianName'



function HomeSupervisor() {

    const [active , setActive] = React.useState("")
let technicianName;
const[user,setUser]=useState({
    id:"",
    username:"",
    email:"",
    idUser:"",
    type:"",
    Factory:"",
})

useEffect(() => {
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
            
        </div>

        <div>

        </div>
            
        </div>

      

    </div>
  )
}

export default HomeSupervisor