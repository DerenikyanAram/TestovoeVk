// Counter.js
import React, { useState } from "react";
import Button from "../button/Button"; // Убедись, что путь верный

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const incrementCount = () => {
        setIsLoading(true);
        setTimeout(() => {
            setCount(prevCount => prevCount + 1);
            setIsLoading(false);
        }, 1000); // Задержка в 1000 мс (1 секунда)
    };

    return (
        <div>
            <Button onClick={incrementCount} count={count} isLoading={isLoading} />
        </div>
    );
}

export default Counter;
