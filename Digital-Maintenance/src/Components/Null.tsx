import logo from '../assets/Logo.svg'

function Null() {
  return (
    <div>
        <div className='nullText flex flex-col lg:justify-center items-center '>
            <img className=' w-1/4' src={logo}/>
            <p className=' text-gray-500 text-xl'>Select task to write your report</p>
        </div>
    </div>
  )
}

export default Null