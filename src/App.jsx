import { useRef, useState } from "react";

function App() {

  const [ input, setInput ] = useState("");
  const backgroundBgRef = useRef();

  const inputHandler = (e) => {
    setInput(e.target.value);
    const blurValue = 16 - input.length;
    backgroundBgRef.current.style.filter = `blur(${blurValue}px)`;
  }

  return (
    <>
    <div className="background" ref={ backgroundBgRef } id="background"></div>
      <div className="container">
        <h2 className="title">Image Password Strength</h2>
        <p className="sub-title">Enter minimum 16 characters and check the Background Image: 😊 </p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" value={ input } onInput={ inputHandler } />
      </div>
    </>
  )
}

export default App;
