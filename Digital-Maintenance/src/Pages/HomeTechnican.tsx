import React from 'react'
import Nav from '../Components/Nav'

//compoonants
import Tasks from '../Components/Tasks'

function HomeTechnican() {
  const Login = localStorage.getItem("Login")
  if(Login != "true") {window.location.href="/";}

  return (
    <div>
        <Nav/>
        {/* Technican Panel */}
        <div className='flex flex-col items-start gap-10'>
        <h1 className='w-7/12 text-2xl mt-14 ml-32'>Technican Panel</h1>
          <div className='flex  w-full'>
            <Tasks/>
          </div>
        </div>
    </div>
  )
}

export default HomeTechnican