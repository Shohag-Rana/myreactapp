import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [color, setColor] = useState('white');
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const updateColor = (color_name) => {
    setColor(color_name)
    console.log(color_name)
    console.log(color)
  }

  let ToggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
      document.title = 'Text Utils- light mode';
      // setInterval(() => {
      //   document.title = "TextUtils  is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enable", "warning")
      document.title = 'Text Utils dark mode';
    }

  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} ToggleMode={ToggleMode} color={color} updateColor={updateColor} />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm heading="Enter your text below" showAlert={showAlert} mode={mode} color={color} updateColor={updateColor} />
      <About />
      </div>
    </>
  );
}

export default App;
