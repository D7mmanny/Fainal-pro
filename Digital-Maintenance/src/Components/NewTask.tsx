import React from 'react'

function NewTask() {
  return (
    <div>
        <div className='flex h-14 text-xl '>
            <a className=' bg-myGray w-1/2 h-full  flex justify-center items-center rounded-l-xl' href="">Inspection</a>
            <a className='bg-myGray w-1/2 h-full text-center flex justify-center items-center rounded-r-xl' href="">Maintenance</a>
        </div>

        <div className='mt-10'>
          <h1 className='text-center text-2xl p-10'>Chose the Lab</h1>
          <div className='flex justify-center '>
            <ul className='flex gap-5 text-xl w-4/5 border-solid border-4 p-5 rounded-xl'>
            <a className='bg-light-blue w-2/12 h-14 text-white rounded-xl flex justify-center items-center'  >Lab A2</a>
            <a className='bg-light-blue w-2/12 text-white rounded-xl flex justify-center items-center' > Lab S8</a>
            <a className='bg-light-blue w-2/12 text-white rounded-xl flex justify-center items-center' >Lab G5</a>
            <a className='bg-light-blue w-2/12 text-white rounded-xl flex justify-center items-center' >Lab T3</a>
            <a className='bg-light-blue w-2/12 text-white rounded-xl flex justify-center items-center' >Lab W4</a>
            <input type="text"  value={}/>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default NewTask