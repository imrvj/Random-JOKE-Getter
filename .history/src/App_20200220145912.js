import React, { useEffect, useState } from 'react';

function App() {
  const [joke, setjoke] = useState("Loading")
  useEffect(() => {
    fetch('http://api.icndb.com/jokes/random')
    .then(res=>res.json())
    .then(result=>
      {
         setjoke(result.value.joke)
      })
    
    
  }, []);
  return (
    <div>
      <h1>JOKE APP</h1>
  <h2>{joke}</h2>
    </div>
  )
}

export default App;
 