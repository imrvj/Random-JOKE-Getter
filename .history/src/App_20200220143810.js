import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    localStorage.setItem("name","Ranvijay")
  }, []);

  const dothis=()=>
  {
    const a =document.getElementById("in").value();
    console.log(a)
  }
  return (
    <div>
      <input id="in"></input>
      <button onClick={this.dothis}>CLICK</button>
    </div>
  )
}

export default App;
