import React,{useContext} from 'react';
import context from './Context';

function Navbar() {
  const dark = useContext(context);
  return (
    <div className={dark ? 'dark' : 'light'}>
        <h1>Navbar</h1>
    </div>
  )
}

export default Navbar;