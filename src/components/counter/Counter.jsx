import React, {useState} from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
        console.log(counter)
    }
    const decrement = () => {
        setCounter(counter - 1)
        console.log(counter)
    }

        return (
        <div className="App">
            <h3>Lesson {counter}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment} >+</button>
        </div>
        );

}