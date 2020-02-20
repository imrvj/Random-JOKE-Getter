import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    localStorage.setItem("name","Ranvijay")
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default App;
