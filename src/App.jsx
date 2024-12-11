import { useRef, useState } from "react";

const App = () => {
    let input = useRef(null);
    const [entered, setEntered] = useState(null);
    const timerRef = useRef(null); // To store the timer reference

    const clickHandler = () => {
        setEntered(input.current.value);
        input.current.value = "";

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            setEntered(null);
        }, 5000);
    };

    return (
        <div>
            <input ref={input} type={"text"} placeholder={"Enter Something"} />
            <button onClick={clickHandler}>Submit</button>
            <h1>{entered}</h1>
        </div>
    );
};

export default App;
