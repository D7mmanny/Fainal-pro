// import React from 'react'
import user from '../assets/user.svg'

function Info() {
    const name = localStorage.getItem("username")
    const email = localStorage.getItem("email")
    const id = localStorage.getItem("id")
  return (
    <div>
        <div className='Info bg-myGray rounded-xl w-96 border flex flex-col items-center pb-5 lg:pb-0 '>
            <img className=' drop-shadow-xl py-5' src={user}/>
            <h1 className='text-xl py-3'>Personal Information</h1>
            <div className='h-72 w-96 border border-gray-400 border-spacing-1 rounded-xl flex flex-col'>
                <h1 className='ml-8 py-4'>Name: {name}</h1>
                <hr className="border border-gray-300 w-full border-spacing-0.5" />
                <h1 className='ml-8 py-4'>Email: {email}</h1>
                <hr className="border border-gray-300 w-full border-spacing-0.5" />
                <h1 className='ml-8 py-4'>ID: {id}</h1>
                <hr className="border border-gray-300 w-full border-spacing-0.5" />
            </div>
        </div>
    </div>
  )
}

export default Info