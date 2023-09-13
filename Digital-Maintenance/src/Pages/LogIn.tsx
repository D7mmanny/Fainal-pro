import React from 'react'
import LogInImg from '../assets/logInImg.svg'
import Logo from '../assets/Logo.svg'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogIn() {
    const nav = useNavigate()

    type IusersApi = {
        idUser:string,
        username:string,
        email:string,
        type:string,
        Factory:string
    }

    //state
    const [userInput , setUserInput]=React.useState("")
    const [error , setError]=React.useState("")
    const [usersApi , setUsersApi]=React.useState<IusersApi[]>([])

    // Get Users Api
    React.useEffect(() => {
        axios.get("https://64f8e5cc824680fd21802e48.mockapi.io/Users")
        .then((response) => {
            setUsersApi(response.data);
        });
      }, []);

    //functions
    const checkId = () =>{
        if (userInput != ""){
            usersApi.map((item) => {
                if(item.idUser == userInput ){
                   localStorage.setItem("username",item.username)
                   localStorage.setItem("id",item.idUser)
                   localStorage.setItem("email",item.email)
                   localStorage.setItem("type",item.type)
                   localStorage.setItem("Factory",item.Factory)
                   localStorage.setItem("Login","true")
                   setError("")



                    {item.type == "Supervisor" && nav("/HomeSup")}
                    {item.type == "Technician" && nav("/HomeTech")}
                    {item.type == "manager" && (nav("/HomeManager"))}
                }
                else{
                    setError("the id are not correct")    
                }
            })
        } else {
            toast.info('Fill the empty field', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });   
        }
    }
  return (
    <div className=' bg-myGray h-screen'>
        <div className='lg:pt-28 pt-96'>
        <div className='flex w-4/5  justify-center items-center border lg:ml-36 md:ml-20 sm:ml-20 max-sm:ml-10 max-sm:flex-col-reverse drop-shadow-lg bg-white'>
            <div className=' flex flex-col w-2/5 justify-center items-center gap-5 max-sm:gap-2'> 
                <img 
                className='lg:w-28 md:w-20 sm:w-20 max-sm:w-10 max-sm:pt-3'
                src={Logo}/>
                <input
                type='text'
                placeholder='user Id'
                className=' lg:py-1 lg:px-20 md:px-1 md:py-1 sm:py-1 sm:px-1 max-sm:py-0.5 max-sm:px-0.5 rounded-xl  border-4 text-center'
                onChange={(e)=>setUserInput(e.target.value)}
                />
                <div className='w-full flex justify-center'>
                <button
                className='w-5/12 lg:w-3/12 lg:h-10  bg-light-blue  max-sm:text-sm  rounded-xl text-white hover:bg-dark-blue'
                onClick={checkId}>
                    Log in
                </button>
                </div>
                <p className=' text-xl font-semibold'>{error}</p>
            </div>
            <div className='w-3/5'> 
                <img src={LogInImg}/>
            </div>
        </div>
        </div>
        <ToastContainer />    
    </div>
  )
}

export default LogIn