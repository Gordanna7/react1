import { useState } from "react"



const LifecycleFuncComponent = () => {


    const [counter, setCounter] = useState(10)
    const [color, setColor] = useState("red")
    // let counter = 10


    const increment = () => {
        setCounter(counter + 10)
    }



    return <div>
        counter : {counter}

        <br />
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCounter(counter + 10)}>Increment v2</button>

        <hr />
        <div style={{
            color: color
        }}>Text with color</div>
    </div>
}

export default LifecycleFuncComponent