import axios from 'axios'
import { useState } from "react";


function AdduUser() {

    const [error,setErorr]=useState("")
    const [user, setUser] = useState({
      username: "",
      email: "",
      idUser: "",
      type:"",
      Factory:""
    });
   
    
    const handleInput = (e) => {
      e.persist();
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const saveUser =(e) =>{ 
      e.preventDefault();
      const data ={
          username: user.username,
          email: user.email,
          idUser: user.idUser,
          type: user.type,
          Factory:user.Factory
      }
      if(data.username==""||data.email==""||data.idUser==""||data.type=="" ||data.Factory=="")
      {setErorr("There is something empty")}
      else{
        axios.post(`https://64f8e5cc824680fd21802e48.mockapi.io/Users`,data)
        .then(res=>{
            console.log(res);
        });
       
        setErorr("")
      }
      console.log(error);
      
         
    }

    
  return (
    <div>
<div className='bg-slate-500'>
    <div className="logIn_2 h-screen">
    
    <div className=" flex justify-center ">
      <div className=" mt-10 w-96 h-80 flex flex-col gap-5 text-center">
        <h1 className="Sh1">Sign up</h1>
        <input 
          className=" placeholder: placeholder:italic text-center"  
          name="username" 
          type="text" 
          placeholder="Username" 
          onChange={handleInput} 
        />
        <input 
          className=" placeholder: placeholder:italic text-center" 
          name="email" 
          type="email" 
          placeholder="Email" 
          onChange={handleInput} 
        />
        <input 
          className=" placeholder: placeholder:italic text-center" 
          name="idUser" 
          type="text" 
          placeholder="idUser" 
          onChange={handleInput} 
        />
     

<select name="type" onChange={handleInput} >
<option value="">type</option>
    <option value="manager">manager</option>
    <option value="Technician">Technician</option>
    <option value="Supervisor">Supervisor</option>
    
  </select>


  <select name="Factory" onChange={handleInput}>
  <option value="">Factory</option>
    <option value="Riyadh">Riyadh</option>
    <option value="Jeddah">Jeddah</option>
    <option value="Dammam">Dammam</option>
    
  </select>




     

        <div className="flex flex-col items-center  mt-10">
        <div className="text-white mb-5"></div>
        <button
          className=" text-white transform w-2/3 py-2 px-16 mb-12 rounded-xl font-bold duration-300 bg-sky-700 border-transparent hover:bg-sky-600"
          type="submit" 
          onClick={saveUser}
        >
          Sign up
        </button>
        
        {error}
        </div>

      
      </div>
    </div>
   
    </div>
    
    </div>

    </div>
  )
}

export default AdduUser