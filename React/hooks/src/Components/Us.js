import React, { useState } from 'react'

function Us() {
    const [count,setCount] = useState(1); 
    const [emoji,setEmoji] = useState('😀');
    const [mes,SetMes] = useState({message: 'Hooks are op🔥🔥'});
    return (
        <>
        <button onClick={()=>setCount(count+1)}>+1</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>-1</button>
        <button onClick={()=>setEmoji(emoji==='😀' ? '🙂' : '😀')}>{emoji==='😀' ? 'Happy' : 'Depressed'}{emoji}</button>
        <p>{mes.message}</p>
        </>
    )
}

export default Us;