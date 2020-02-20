import React, { useEffect, useState } from 'react';

function App() {
  const [fname, setfname] = useState('John')
  const [lname, setlname] = useState('wick')
  const [joke, setjoke] = useState("Loading")
  useEffect(() => {
    dothis(fname,lname)

      
  }, []);

   const dothis=(first,second)=>
      {
        fetch( `http://api.icndb.com/jokes/random?firstName=${first}&;lastName=${second}`)
        .then(res=>res.json())
        .then(result=>
          {
             setjoke(result.value.joke)
          })
        
      }
    
    

  return (
    <div>
      <h1>JOKE APP</h1>
      <input ></input>
      <input></input>
  <h2>{joke}</h2>
  <button onClick={dothis(fname.lname)}>click me</button>
    </div>
  )
}

export default App;
 