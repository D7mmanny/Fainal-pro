
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

            <select className='w-44 ' name="" id="" size={5}>
              <option className='bg-light-blue  h-14 text-white rounded-xl flex justify-center items-center m-2' value="Lab A2">Lab A2</option>
              <option className='bg-light-blue  h-14 text-white rounded-xl flex justify-center items-center m-2' value="Lab S8">Lab S8</option>
              <option className='bg-light-blue  h-14 text-white rounded-xl flex justify-center items-center m-2' value="Lab G5">Lab G5</option>
              <option className='bg-light-blue  h-14 text-white rounded-xl flex justify-center items-center m-2' value="Lab T3">Lab T3</option>
              <option className='bg-light-blue  h-14 text-white rounded-xl flex justify-center items-center m-2' value="Lab W4">Lab W4</option>
            </select>
          
          </div>
        </div>
    </div>
  )
}

export default NewTask