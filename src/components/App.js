
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  
    useEffect(() => {
      if(name){
        setGreeting(`Hello, ${name}!`);
      }
    }, [name]);
  
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Enter your name:</h1>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

      {greeting}
    </div>
  )
}

export default App
