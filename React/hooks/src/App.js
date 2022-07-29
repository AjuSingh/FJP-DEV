import './App.css';
import Navbar from './Components/Navbar';
import Parent1 from './Components/Parent1';
import Parent2 from './Components/Parent2';
import context from './Components/Context';
import { useState } from 'react';

function App() {
  const [dark,setDark] = useState(false);
  return (
    <div className="App">
      <button onClick={()=>setDark(!dark)}>Change Theme</button>
      <context.Provider value={dark}>
      <Navbar/>
      <Parent1/>
      <Parent2/>
      </context.Provider>
    </div>
  );
}

export default App;
