
import { Route,Routes } from 'react-router-dom'
import './App.css'

//pages
import AdduUser from './Pages/AdduUser'
import LogIn from "./Pages/LogIn"
import HomeSupervisor from './Pages/HomeSupervisor'

function App() {


  return (
    <>
    <Routes>
      <Route path='/AddUser' element={<AdduUser/>}/>
      <Route path='/HomeSup' element={<HomeSupervisor/>}/>
      <Route path="/" element={ <LogIn/>} />
    </Routes>
    </>
  )
}

export default App
