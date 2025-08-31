import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=> {
    setAlert(
      {
        msg : message,
        type : type
      }
    )
    setTimeout(()=> {
      setAlert(null)
    },3000);

    
  }

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has enabled", "Success");
    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has enabled", "Success");
    }
    
   }
   
  return (
    <> <Router>
       <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}  />
       {/* <Navbar/> */}
    <Alert alert = {alert} />
        <div className="container my-3">{/*container is a bootstrap class that adds margin and padding to the container and my-3 adds margin to the top and bottom of the container */}   
 <Routes>
          {/* <Route path="/about">
            <About />
          </Route>
           */}
           <Route path="/about" element={<About />} />
          <Route 
  path="/" 
  element={<Textform showAlert={showAlert} heading="Analyze Your Text" mode={mode} />} 
/>

        </Routes>
       
       </div>
       </Router>
      
    </>
  );
}
export default App;

