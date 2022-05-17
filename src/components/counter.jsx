import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";

const Counter = (props)=>{
    // count = Number(count);
    // console.log(props.initialValue);
    const [counter, setCounter] = useState(props.initialValue)
    let countColor;
    const isOdd = ()=>{
        if((counter+1)%2 == 0) countColor = true;
        else countColor = false;
    }
    isOdd();

    // console.log(isOdd());
    // console.log(countColor)

    return (
        <div className="counter-div">
            <h1>CounterApp</h1>
            <h2 className={countColor ? styles.red:styles.green}>{counter}</h2>
            <button onClick={()=>{
          
                setCounter(counter+1)
            } 
            } className="Btn">Increment</button>

            <button onClick={()=>{
                if(counter > 0){
                    setCounter(counter-1);
                }
            }} className="Btn">Decrement</button>
            <button onClick={()=>{
                setCounter(counter*2);
            }} className="Btn">Double</button>
        </div>
    );
};

export default Counter;