
import './App.css';
import Alart from './Component/Alart.js';
import Navbar from './Component/Navbar.mjs'
import Texta from './Component/Texta.js'
//import About from './Component/About.js'
import { useState } from 'react';


function App() {
  const [mode, setMode]= useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const togglemode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#050c2a';
      showAlert("dark mode has been Enabled", "success");  
    }
    else {setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been Enabled", "success")
        }
  };
  
  return (<>
   <Navbar title="UGGU" aboutText="About Us"  mode={mode} togglemode={togglemode} />
   <Alart alert={alert}/>


   <div className="container mx-5">
    <Texta heading="Case convertor" mode={mode}/>
    </div>
    
    </>
  );
}

export default App;
