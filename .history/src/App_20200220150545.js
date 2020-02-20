import React, { useEffect, useState } from 'react';

function App() {
  const [joke, setjoke] = useState("Loading")
  useEffect(() => {
    dothis()

      
  }, []);

   const dothis=()=>
      {
        fetch('http://api.icndb.com/jokes/random?firstName=Ranviay&amp;lastName=Singh')
        .then(res=>res.json())
        .then(result=>
          {
             setjoke(result.value.joke)
          })
        
      }
    
    

  return (
    <div>
      <h1>JOKE APP</h1>
  <h2>{joke}</h2>
  <button onClick={dothis}>click me</button>
    </div>
  )
}

export default App;
 