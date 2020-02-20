import React, { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    localStorage.setItem("name",{a})
  }, []);

  const dothis=()=>
  {
     a =document.getElementById("in").value;
    console.log(a)
  }
  return (
    <div>
      <input id="in"></input>
      <button onClick={dothis}>CLICK</button>
    </div>
  )
}

export default App;
