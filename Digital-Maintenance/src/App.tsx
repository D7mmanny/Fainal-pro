
import { Route,Routes } from 'react-router-dom'
import './App.css'


//pages
import AdduUser from './Pages/AdduUser'
import LogIn from "./Pages/LogIn"
import HomeSupervisor from './Pages/HomeSupervisor'
import HomeTechnican from './Pages/HomeTechnican'
import HomeManager from './Pages/HomeManager'
import Dashboard from './Pages/Dashboard'

function App() {


  return (
    <>
    <Routes>
      <Route path='/AddUser' element={<AdduUser/>}/>
      <Route path='/HomeSup' element={<HomeSupervisor/>}/>
      <Route path='/HomeTech' element={<HomeTechnican/>}/>
      <Route path='/HomeManager' element={<HomeManager/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path="/" element={ <LogIn/>} />
    </Routes>
    </>
  )
}

export default App
