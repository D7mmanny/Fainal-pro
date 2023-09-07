import React from 'react'

function HomeSupervisor() {
  return (
    <div >
        {/* Nave */}
        <div>

        </div>
        
        {/* Supervisor Panel */}
        <div className='flex flex-col items-center gap-10 '>
        <h1 className='w-7/12'>Supervisor Panel</h1>
            <div className='w-8/12 h-96 flex justify-evenly shadow-2xl'>  
                <div>
                    new task
                </div>
                
                <div>
                    new report
                </div>

                <div>
                    Shutdown
                </div>
            </div>
        </div>
      

       

    </div>
  )
}

export default HomeSupervisor