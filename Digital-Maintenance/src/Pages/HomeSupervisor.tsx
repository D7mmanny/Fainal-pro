import React from 'react'
import Nav from '../Components/Nav'

function HomeSupervisor() {
  return (
    <div >
        {/* Nave */}
        <div>
        <Nav/>
        </div>
        
        {/* Supervisor Panel */}
        <div className='flex flex-col items-center gap-10 '>
        <h1 className='w-7/12 text-2xl'>Supervisor Panel</h1>
        <div className='w-8/12  h-96 shadow-2xl flex justify-center'>
            <div className='w-6/12 flex justify-evenly text-xl text-light-blue justify-items-center'>  
                <div className='w-3/12 h-fit'>
                    <button className='w-full h-14  bg-slate-300 rounded-full shadow-lg bg-myGray'>new task +</button>
                </div>
                
                <div className='w-3/12 h-fit'>
                    <button className=' w-full h-14 bg-slate-300 rounded-full shadow-lg bg-myGray'>new report +</button>
                </div>

                <div className='w-3/12 h-fit'>
                    <button className='w-full h-14 bg-slate-300 rounded-full shadow-lg bg-myGray'> Shutdown</button>
                </div>

            </div>
        </div>
            
        </div>
      

       

    </div>
  )
}

export default HomeSupervisor