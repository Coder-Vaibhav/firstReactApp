import './App.css';
import About from './Components/About';
import InputForm from './Components/InputForm';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Components/Shop';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [alert, setAlert] = useState({});

  const pvtHandleDarkModeToggle = ()=>{
    document.body.style.backgroundColor = isDarkMode ? "white" : "grey";
    setIsDarkMode(!isDarkMode);
  };

  const pvtShowMessage = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    
    setTimeout(() => {
      setAlert({});
    }, 2000);
  };

  return (
    <BrowserRouter>
      <Navbar name="TextUtils" darkMode={isDarkMode} onToggleMode={pvtHandleDarkModeToggle} /> 
      <Alert alert={alert} />
      
      <Shop />
      <Routes>
        <Route path="/" >
          <Route index element={ <InputForm heading="Enter text below" darkMode={isDarkMode} showAlert={pvtShowMessage} /> } /> 
          <Route exact path="about" element={<About darkMode={isDarkMode} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
