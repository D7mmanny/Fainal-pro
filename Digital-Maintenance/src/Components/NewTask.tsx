import React from 'react'

function NewTask() {
  return (
    <div>
        <div className='flex h-14 text-xl '>
            <a className=' bg-myGray w-1/2 h-full  flex justify-center items-center rounded-l-xl' href="">Inspection</a>
            <a className='bg-myGray w-1/2 h-full text-center flex justify-center items-center rounded-r-xl' href="">Maintenance</a>
        </div>
    </div>
  )
}

export default NewTask