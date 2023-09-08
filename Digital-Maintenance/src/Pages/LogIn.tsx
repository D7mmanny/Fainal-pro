import React from 'react'
import LogInImg from '../assets/logInImg.svg'
import Logo from '../assets/Logo.svg'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

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
                   localStorage.setItem("email",item.email)
                   localStorage.setItem("type",item.type)
                   localStorage.setItem("Factory",item.Factory)
                   setError("")



                    {item.type == "Supervisor" && nav("/HomeSup")}
                    {item.type == "Technician" && nav("/HomeTech")}
                    {item.type == "manager" && (nav("/HomeManager"))}
                }
            })
        } else {
            setError("incorrect input")
        }
    }
  return (
    <div className=' bg-myGray h-screen'>
        <div className='lg:pt-28 md:pt-52 sm:pt-52 max-sm:pt-40'>
        <div className='flex w-4/5  justify-center items-center border lg:ml-36 md:ml-20 sm:ml-20 max-sm:ml-10 max-sm:flex-col-reverse drop-shadow-lg bg-white'>
            <div className=' flex flex-col w-2/5 justify-center items-center gap-5 max-sm:gap-2'> 
                <img 
                className='lg:w-28 md:w-20 sm:w-20 max-sm:w-10 max-sm:pt-3'
                src={Logo}/>
                <input
                type='text'
                placeholder='user Id'
                className=' lg:py-1 lg:px-20 md:px-1 md:py-1 sm:py-1 sm:px-1 max-sm:py-0.5 max-sm:px-0.5 rounded-xl border text-center'
                onChange={(e)=>setUserInput(e.target.value)}
                />
                <button
                className=' bg-light-blue max-sm:mb-3 max-sm:py-0.5 max-sm:text-sm max-sm:px-1 lg:py-1 lg:px-10 md:py-0.5 md:px-4 sm:py-0.5 sm:px-4 rounded-xl text-white hover:bg-dark-blue'
                onClick={checkId}>
                    Log in
                </button>
                {error}
            </div>
            <div className='w-3/5'> 
                <img src={LogInImg}/>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default LogIn