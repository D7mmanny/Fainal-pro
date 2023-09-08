import React from 'react'
import Nav from '../Components/Nav'

function TechnicianReport() {
  return (
    <div>
        <div>
        <Nav/>
        </div>
        <div className='p-10'>
        <h1 className='pl-3 text-4xl'>Labs reports</h1>
        <div className=' shadow-2xl w-12/12 h-72 '>
            <div className='p-5'>
                <div className='border-solid border-2 flex border-gray-500 shadow-2xl '>
                    <h4 className='bg-gray-300 w-1/6 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>Technician name</h4>
                    <h4 className='bg-gray-300 w-1/6 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>Status</h4>
                    <h4 className='bg-gray-300 w-1/6 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>Lab</h4>
                    <h4 className='bg-gray-300 w-1/6 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>Task type</h4>
                    <h4 className='bg-gray-300 w-2/6 h-14 flex justify-center items-center'>Report</h4>
                </div>
            </div>
          
        </div>
        </div>
    </div>
  )
}

export default TechnicianReport