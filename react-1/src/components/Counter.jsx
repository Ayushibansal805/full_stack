import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);

    function increase(){
        setCount(count + 1);
    }
    function decrease(){
        if (count > 0){
            setCount(count - 1);
        }
    }
    function reset(){
        setCount(0);
    }

    return (
    <>
    <h1>Counter: {count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <button onClick={reset}>Reset</button>
    </>
    )

}

export default Counter;