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

           </div>
        </div>
    </div>
  )
}

export default HomeManager