import React, { useState, useEffect, useRef } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    let countThree = useRef(0);
    let countFour = 0;
    console.log(countThree);

    const handleCountUp = (e) => {
        setCount(count + 1);
    };
    const handleCountUpTwo = (e) => {
        setCountTwo(countTwo + 1);
    };
    const handleCountUpThree = (e) => {
        countThree.current = countThree.current + 1;
    };
    const handleCountUpFour = (e) => {
        countFour = countFour + 1;
    };

    useEffect(() => {
        console.log("count가 감시되고 있습니다.");
    }, [count]); // count가 변경되는 것을 감시
    return (
        <>
            <div>{count}</div>
            <button onClick={handleCountUp}>up!</button>
            <div>{countTwo}</div>
            <button onClick={handleCountUpTwo}>up!</button>
            <div>{countThree.current}</div>
            <button onClick={handleCountUpThree}>up!</button>
            <div>{countFour}</div>
            <button onClick={handleCountUpFour}>up!</button>
        </>
    );
}

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

export default App;
