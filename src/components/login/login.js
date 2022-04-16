import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../lottie/turtle.json'
// import '../loading.css';
import CardLogin from './CardLogin';
import {Link} from 'react-router-dom';







export default function login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
    
  };


  return (
    <div id=''>
      <Lottie className='absolute -z-1'
        options={defaultOptions}
        height={"100vh"}
        width={"100vw"}
        style={{
          position: `absolute`,
        }}
      />
      <nav class="relative w-full flex flex-wrap  py-3 bg-none text-gray-500 ">

        <div class=" flex flex-wrap  justify-between align-center w-full">

          <div>
            <h1 id="s1" className="text-5xl m-5 tracking-wider text-white font-black">Sahayta</h1>

          </div>
          <div className="flex space-x-5 px-5">
            <h1 id="menu">Home </h1>
            <h1 id="menu">Sign Up </h1>
          </div>

        </div>
      </nav>
      <CardLogin/>
      
      <footer className='text-white'>
        <div>
          <ul>
            <li>
              HELP ?

            </li>
            <li>
              FAQ
            </li>
          </ul>
        </div>
      </footer>




    </div>
  )
}
