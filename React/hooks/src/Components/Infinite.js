import React from 'react'

function Infinite() {
    const [count, setCount] = useState(1);
    useEffect(() => {
        setCount(Math.random() * 100);
    })
    //here the cycle will be created render useEffect render Use Effect like it will be infinite.
    return (
        <>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </>
    )
}

export default Infinite