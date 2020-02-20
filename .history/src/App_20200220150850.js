import React, { useEffect, useState } from 'react';

function App() {
  const [fname, setfname] = useState('John')
  const [lname, setlname] = useState('wick')
  const [joke, setjoke] = useState("Loading")
  useEffect(() => {
    dothis()

      
  }, []);

   const dothis=(fname,lname)=>
      {
        fetch('http://api.icndb.com/jokes/random?firstName=Ranviay&;lastName=Singh')
        .then(res=>res.json())
        .then(result=>
          {
             setjoke(result.value.joke)
          })
        
      }
    
    

  return (
    <div>
      <h1>JOKE APP</h1>
      <input></input>
      <input></input>
  <h2>{joke}</h2>
  <button onClick={dothis}>click me</button>
    </div>
  )
}

export default App;
 