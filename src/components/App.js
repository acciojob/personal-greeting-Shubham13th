
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');


  
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Enter your name:</h1>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

      { name && <p>Hello, {name}!</p> }
    </div>
  )
}

export default App
