import React, { useEffect, useState } from 'react'

function Ue3() {
    const [count, setCount] = useState(1);
    const [mes, setMes] = useState({ message: 'Hooks are op🔥🔥' });
    //use effect only run when there is change in the count
    useEffect(() => {
        console.log("use effect called..");
        document.title = `Button Clicked ${count} times`
    },[count]);


   let handleChange = (e) => {
        mes.message = e.target.value;
        console.log(mes);
        setMes({...mes});
    }
    return (
        <>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <input type="text" value={mes.message} onChange={(e) => handleChange(e)} />
        </>
    )
}

export default Ue3