import React from 'react'

function Ue2() {
    const [count, setCount] = useState(1);
    //this is used as componentdidmount
    //because we have dependency array on which change the useEffect Runs
    useEffect(() => {
        console.log("Use effect called");
    }, [])
    return (
        <>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </>
    )
}

export default Ue2