import React from 'react'
import LogInImg from '../assets/logInImg.svg'
import Logo from '../assets/Logo.svg'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function LogIn() {
    // const nav = useNavigate()

    type IusersApi = {
        idUser:string,
        username:string,
        email:string,
        type:string,
        Factory:string
    }

    //state
    const [userInput , setUserInput]=React.useState("")
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
                    console.log(item);

                    // (nav("/Home"))
                }
            })
        }
    }
  return (
    <div className=' bg-myGray h-screen'>
        <div className='pt-28'>
        <div className='flex w-4/5 justify-center items-center border ml-36 drop-shadow-lg bg-white'>
            <div className=' flex flex-col w-2/5 justify-center items-center gap-5'> 
                <img 
                className='w-28'
                src={Logo}/>
                <input
                type='text'
                placeholder='user Id'
                className=' w-80  py-1 rounded-xl border text-center'
                onChange={(e)=>setUserInput(e.target.value)}
                />
                <button
                className=' bg-light-blue py-1 px-10 rounded-xl text-white hover:bg-dark-blue'
                onClick={checkId}>
                    Log in
                </button>
            </div>
            <div className=' w-3/5'> 
                <img src={LogInImg}/>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default LogIn