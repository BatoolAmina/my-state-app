import React, {useState} from "react";
function App()
{
    const [count, setCount] = useState(0);
    return(
        <div className="content">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Restart</button>
        </div>
    );
}
export default App;