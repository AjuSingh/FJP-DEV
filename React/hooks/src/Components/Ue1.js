import React, { useEffect } from 'react'

function Ue1() {
    const [count, setCount] = useState(1);
    //this is used as componentdidmount and componentdidupdate
    //because we don't have dependency array on which change the useEffect Runs
    useEffect(()=>{

    })
    return (
        <>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </>
    )
}

export default Ue1