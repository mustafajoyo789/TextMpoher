import React, {useState} from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert"
import Textform from "./components/TextForm";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const [mybtn, setMyBtn] = useState("Enable Dark Mode")

  const showAlert = (message, type )=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      setMyBtn('Enable Light Mode')
      document.body.style.backgroundColor = '#201e1e';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      setMyBtn('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }

  }
  return (
    <> 
    <Navbar title="TextMopher"  abouttext="About" mode={mode} btn={mybtn} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container my-3">
    {<Textform heading="Enter Text to Analyze" mode={mode} showAlert={showAlert}/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={<Textform heading="Enter Text to Analyze" mode={mode} showAlert={showAlert}/>} />
    //   </Routes>
    //   <Routes>
    //     <Route exact path="/about" element={<About mode={mode}/>} />
    //   </Routes>
    // </BrowserRouter>
    }
    </div> 
    </>  
  );
}

export default App;
