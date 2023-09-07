import {Routes, Route} from "react-router-dom";
import './App.css'

//pages
import AdduUser from './Pages/AdduUser'
import LogIn from "./Pages/LogIn";


function App() {


  return (
    <>
    <Routes>
      <Route path="addUser" element={ <AdduUser/>} />
      <Route path="/" element={ <LogIn/>} />

    </Routes>
   
   
    </>
  )
}

export default App
