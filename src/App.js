 
//import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  const[mode,setMode]=useState('light');//whether dark mode is enabled or not 
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);

  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='#061c31';
      showAlert("Dark Mode Has been Enabled", "success");
      document.title='TextUtils-Dark Mode';
     /*npm start
      setInterval(() => {
        document.title='TextUtils is Amazing';
       }, 2000);
       setInterval(() => {
        document.title='Install TextUtils now';
       },1500);*/
      
    
    }
    else{
       setMode('light')
       document.body.style.backgroundColor ='white';
       showAlert("Light Mode Has been Enabled", "success");
       document.title='TextUtils-Light Mode';
       
    }
  }
  return (<>

  <BrowserRouter>


{/*<Navbar title="TextUtils2" aboutText="About TextUtils"/>*/}

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className="container my-3">
  <Routes>

          <Route path="/about" element={<About/>}>
            
          </Route>
        
          <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the Text To Analyze" mode={mode}/>}>

         
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    
         
          
    
      


    </>);
}

export default App; 
