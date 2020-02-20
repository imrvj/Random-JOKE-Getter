import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(Ranvijay)
  useEffect(() => {
    localStorage.setItem("value",JSON.stringify(count))
  }, []);
  return (
    <div>
      <h1>Counter</h1>
  <p>{count}</p>
  <button onClick={()=>setCount(count+1)}> click</button>
    </div>
  )
}

export default App;
