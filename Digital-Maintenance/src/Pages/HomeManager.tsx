// import React from 'react'
import Nav from '../Components/Nav'
import Map from '../assets/Map.svg'

// Saudi Map
import one from '../assets/1.svg'
import two from '../assets/2.svg'
import three from '../assets/3.svg'
import four from '../assets/4.svg'
import five from '../assets/5.svg'
import six from '../assets/6.svg'
import seven from '../assets/7.svg'
import eight from '../assets/8.svg'
import nine from '../assets/9.svg'
import ten from '../assets/10.svg'
import Eleven from '../assets/11.svg'
import Twelve from '../assets/12.svg'
import thirteen from '../assets/13.svg'

// Factory
import Jeddah from '../assets/Jeddah.svg'
import Najran from '../assets/Najran.svg'
import Riyadh from '../assets/Riyadh.svg'
import alkhubar from '../assets/alkhubar.svg'
import north from '../assets/north.svg'
import Tabuk from '../assets/Tabuk.svg'

 







function HomeManager() {
  return (
    <div>
        <Nav/>      
        <div className='Home bg-dark-blue'>
          {/* Map background */}
          <img className='Home'
           src={Map}/>
           
           {/*Saudi Map*/}
           <div>
            <img className='absolute map1 top-44 mt-2 left-96 ml-14 pl-1 transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer ' 
            src={one}/>
             <img className='absolute map2 top-44 mt-5 left-96 ml-9 transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer' 
            src={two}/>
             <img className='absolute map3 top-60 mt-5 left-80 ml-0.5 pl-1 transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer' 
            src={three}/>
            <img className='absolute map4 top-72 mt-4 left-96 ml-24  transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer' 
            src={four}/>
             <img className='absolute map5 top-80 mt-9 left-96 ml-3 pr-0.5 transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer' 
            src={five}/>
            <img className='absolute map6 top-72 mt-6 left-96 ml-44 pr-0.5 transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer' 
            src={six}/>
             <img className='absolute map7 top-72 mt-2 right-72 mr-7 pr-0.5 transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer' 
            src={seven}/>
             <img className='absolute map8 top-72 mt-16 pl-1 right-96 mr-48 transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer' 
            src={eight}/>
             <img className='absolute map9 top-72 mt-48 left-96 ml-20 transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer' 
            src={nine}/>
             <img className=' map10 transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer' 
            src={ten}/>
            <img className='absolute map11 top-96 mt-52 left-96 ml-44 pl-3 transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer' 
            src={Eleven}/>
             <img className='map12 pl-2 transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer' 
            src={Twelve}/>
             <img className='map13 pl-2 transition ease-in-out delay-150 hover:-translate-y hover:scale-105 cursor-pointer' 
            src={thirteen}/>

            {/* factory */}

            {/* jeddah */}
            <div className='jeddah flex items-center gap-1 text-transparent hover:text-white transition ease-in-out delay-300 '>
            <img className=' transition ease-in-out delay-150 hover:-translate-y border-2 border-green-600 hover:border-white rounded-full cursor-pointer' 
            src={Jeddah}/>
            <p>Jeddah Factory</p>
            </div>
            
            {/* Najran */}
            <div className='Najran flex items-center gap-1 text-transparent hover:text-white transition ease-in-out delay-300 '>
            <img className=' transition ease-in-out delay-150 hover:-translate-y border-2 border-green-600 hover:border-white rounded-full cursor-pointer' 
            src={Najran}/>
            <p>Najran Factory</p>
            </div>

             {/* Riyadh */}
             <div className='Riyadh flex items-center gap-1 text-transparent hover:text-white transition ease-in-out delay-300 '>
            <img className=' transition ease-in-out delay-150 hover:-translate-y border-2 border-green-600 hover:border-white rounded-full cursor-pointer' 
            src={Riyadh}/>
            <p>Riyadh Factory</p>
            </div>

            {/* alkhubar */}
            <div className='alkhubar flex items-center gap-1 text-transparent hover:text-white transition ease-in-out delay-300 '>
            <img className=' transition ease-in-out delay-150 hover:-translate-y border-2 border-green-600 hover:border-white rounded-full cursor-pointer' 
            src={alkhubar}/>
            <p>al-khubar Factory</p>
            </div>

            {/* north */}
            <div className='north flex items-center gap-1 text-transparent hover:text-white transition ease-in-out delay-300 '>
            <img className=' transition ease-in-out delay-150 hover:-translate-y border-2 border-green-600 hover:border-white rounded-full cursor-pointer' 
            src={north}/>
            <p>North Factory</p>
            </div>

            {/* Tabuk */}
            <div className='Tabuk flex items-center gap-1 text-transparent hover:text-white transition ease-in-out delay-300 '>
            <img className=' transition ease-in-out delay-150 hover:-translate-y border-2 border-green-600 hover:border-white rounded-full cursor-pointer' 
            src={Tabuk}/>
            <p>Tabuk Factory</p>
            </div>
           

           </div>
        </div>
    </div>
  )
}

export default HomeManager