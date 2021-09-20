import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    setAlert(
      {
        msg :message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const togglebtn = () =>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      ShowAlert('Dark mode on', "success");
      document.title = 'Text-Utility Dark';
      setInterval(() => {
        document.title ='Come On'
      }, 2000);
      //setInterval(() => {
      //  document.title ='Go On'
      //}, 1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
      ShowAlert('Light mode on', "success");
      document.title = 'Text-Utility Light';
    };

  }



  return (
<>
<Router>
<Alert alert= {alert}/>
<Navbar title= 'My Notes' aboutme='Aboutme' mode={mode} togglebtn={togglebtn}/>
    
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm  ShowAlert= {ShowAlert} heading= 'Enter your text to analyse' mode={mode} togglebtn={togglebtn}/ >
          </Route>
        </Switch>
    


</Router>

  
</>
  );
}

export default App;
