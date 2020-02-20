import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    localStorage.setItem("name","Ranvijay")
  }, []);
  return (
    <div>
      USE EFFECT
    </div>
  )
}

export default App;
