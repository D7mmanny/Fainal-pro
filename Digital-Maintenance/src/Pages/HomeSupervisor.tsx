import React from 'react'

//components
// import React from 'react'
import Nav from '../Components/Nav'
// import NewTask from '../Components/NewTask'
import NewReport from '../Components/NewReport'
import Shutdown from '../Components/Shutdown'

import OperationType from '../Components/OperationType'



function HomeSupervisor() {
  

  


const [active , setActive] = React.useState("")


    
  return (
    <div >
        {/* Nave */}
        <div>
        <Nav/>
        </div>
        
        {/* Supervisor Panel */}
        <div className='flex flex-col items-center gap-10 '>
        <h1 className=' text-2xl mt-14'>Supervisor Panel</h1>
        <div className='lg:w-8/12 h-full pb-20 shadow-2xl flex flex-col gap-9 justify-center items-center'>
            <div className='flex lg:gap-32 gap-10 mx-10 text-light-blue mt-8'>  
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
            {active == "newReport" && <NewReport/>}
            {active == "shutdown" && <Shutdown/>}

            <div className='w-2/3 h-11/12'>
            {active == "newTask" &&  <OperationType/>}  
            </div>

            
            
        </div>

        
        <div>

        </div>
            
        </div>

      

    </div>
  )
}

export default HomeSupervisor