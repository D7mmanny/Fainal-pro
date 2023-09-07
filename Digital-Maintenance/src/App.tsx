import { Route,Routes } from 'react-router-dom'
import './App.css'
import AdduUser from './Pages/AdduUser'
import HomeSupervisor from './Pages/HomeSupervisor'



function App() {


  return (
    <>
    <Routes>
      <Route path='/AddUser' element={<AdduUser/>}/>
      <Route path='/HomeSup' element={<HomeSupervisor/>}/>
    </Routes>
    
   
    </>
  )
}

export default App
