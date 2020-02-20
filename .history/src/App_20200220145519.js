import React, { useEffect } from 'react';

function App() {
  const [joke, setjoke] = useState(null)
  useEffect(() => {
    fetch('http://api.icndb.com/jokes/random')
    .then(res=>res.json())
    .then(result=>{setjoke})
    console.log(setjoke)
    
  }, []);
  return (
    <div>
      <h1>JOKE APP</h1>
    </div>
  )
}

export default App;
 