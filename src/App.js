import { useState,useEffect } from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Splash from './components/loading'
import Login from './components/login/login';

// import { AuthProvider } from '../src/context/authContext';
import Signup from './components/login/signup';
import { AuthProvider } from './context/authContext';


function App() {
  const[Loading,setLoading]=useState(false); //this is for splash animation
    useEffect(()=>{
      setLoading(true)
      setTimeout( ()=>{
        setLoading(false)
      },500)
    },[])
    
  
  return (

          

              <>
                <AuthProvider>
                   <Routes>
                     <Route path="/login" element={<Login/>} />

                     <Route path="/"   element={<Signup />} />

                   </Routes>
                </AuthProvider>
              </>
                
            



        

  );
}

export default App;
