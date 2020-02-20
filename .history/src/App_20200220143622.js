import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    localStorage.setItem("name","Ranvijay")
  }, []);
  return (
    <div>
      <input id="in"></input>
      <button>CLICK</button>
    </div>
  )
}

export default App;
