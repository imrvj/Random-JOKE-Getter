import React, { useState } from 'react';

import './App.css';

function App() {
  const [Color, setColor] = useState("black")
  const [dark, setDark] = useState(false)
  return (
    <div className="App ">
              <div className="nav">
              <div className="switch">
          <label>
            Dark
            <input type="checkbox" onChange={handlethis}/>
            <span className="lever"></span>
            Light
          </label>
        </div>
        </div>

        <div className="content">
          <h2>Light Mode</h2>
        </div>
      </div>
  );
}

export default App;
