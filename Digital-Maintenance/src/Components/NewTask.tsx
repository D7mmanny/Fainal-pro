import { useState } from "react";
import React from "react";


function NewTask() {

const [Lab,setLab]=useState({
  lab:""
})

  const handleInput = (e:React.ChangeEvent<HTMLSelectElement>) => {
    e.persist();
    setLab({ ...Lab, [e.target.name]: e.target.value });
   
   
    
  };
  localStorage.setItem("Lab",Lab.lab)
  return (
    <div>
        

        
          <div className="flex">
          <h1 className=' ml-3 text-xl pb-3 '>the Lab: </h1>
          <h1 className='ml-1 text-xl pb-3 text-light-blue '>{Lab.lab}</h1>
          </div>
          

          <div className='flex justify-center  '>
            <select className=' pt-4 focus:outline-none ' name="lab" id="" size={5} onChange={handleInput}>
              <option className='bg-myGray  hover:bg-gray-300  py-3 w-60 text-light-blue rounded-xl flex justify-center items-center m-2 mb-1 cursor-pointer ' value="Lab A2">Lab A2</option>
              <option className='bg-myGray hover:bg-gray-300  py-3 w-60 text-light-blue rounded-xl flex justify-center items-center m-2 mt-3 mb-1 cursor-pointer' value="Lab S8">Lab S8</option>
              <option className='bg-myGray hover:bg-gray-300 py-3 w-60 text-light-blue rounded-xl flex justify-center items-center m-2 mt-3 mb-1 cursor-pointer' value="Lab G5">Lab G5</option>
              <option className='bg-myGray hover:bg-gray-300 py-3 w-60 text-light-blue rounded-xl flex justify-center items-center m-2 mt-3 mb-1 cursor-pointer' value="Lab T3">Lab T3</option>
              <option className='bg-myGray hover:bg-gray-300  py-3 w-60 text-light-blue rounded-xl flex justify-center items-center m-2 mt-3 mb-1 cursor-pointer' value="Lab W4">Lab W4</option>
            </select>
          </div>
          
        
    </div>
  )
}

export default NewTask