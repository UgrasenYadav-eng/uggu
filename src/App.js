
import './App.css';
import Navbar from './Component/Navbar.mjs'
import Texta from './Component/Texta.js'
//import About from './Component/About.js'
import { useState } from 'react';


function App() {
  const [mode, setMode]= useState('light');

  const tourch=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {setMode('light');
        document.body.style.backgroundColor = 'white';
        }
  };
  
  return (<>
   <Navbar title="UGGU" aboutText="About Us"  mode={mode} tourch={tourch} />
   <div className="container mx-5">
    <Texta headin="Case convertor"/>
    </div>
    
    </>
  );
}

export default App;
