import React,{useContext} from 'react';
import context from './Context';

function Parent2() {
  const dark = useContext(context);
  return (
    <div className={dark ? 'dark' : 'light'}>
      <h1>Parent2</h1>
    </div>
  )
}

export default Parent2