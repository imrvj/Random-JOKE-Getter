import React, { useEffect, useState } from 'react';

function App() {
  const [joke, setjoke] = useState(null)
  useEffect(() => {
    fetch('http://api.icndb.com/jokes/random')
    .then(res=>res.json())
    .then(result=>
      {
        console.log(result.value.joke)
      })
    
    
  }, []);
  return (
    <div>
      <h1>JOKE APP</h1>
    </div>
  )
}

export default App;
 