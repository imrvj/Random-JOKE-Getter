import React, { useEffect } from 'react';

function App() {
  

  useEffect(() => {
    localStorage.setItem("Input Value",document.getElementById("in").value)
  }, []);
  return (
    <div>
      <input id="in"></input>
      <button onClick={dothis}>CLICK</button>
    </div>
  )
}

export default App;
