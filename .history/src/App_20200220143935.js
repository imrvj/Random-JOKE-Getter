import React, { useEffect } from 'react';

function App() {
  


  const dothis=()=>
  {
     const a =document.getElementById("in").value;
    console.log(a)
  }

  useEffect(() => {
    localStorage.setItem("name",{a})
  }, []);
  return (
    <div>
      <input id="in"></input>
      <button onClick={dothis}>CLICK</button>
    </div>
  )
}

export default App;
