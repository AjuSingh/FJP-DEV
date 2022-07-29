import React,{useContext} from 'react';
import context from './Context';
import Child from './Child'
function Parent1() {
  const dark = useContext(context);
  return (
    <div className={dark ? 'dark' : 'light'}>
        <h1>Parent1</h1>
        <Child/>
    </div>
  )
}

export default Parent1