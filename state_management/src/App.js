import './App.css';
import React, { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("Tester1")

  const handleClickTester2 = () => setUserName("Tester2")
  const handleClickTester3 = () => setUserName("Tester3")

  return (
    <div>
      <h1>State Test</h1>
      <p>userName: {userName}</p>
      <button onClick={handleClickTester2}>Tester2</button>
      <button onClick={handleClickTester3}>Tester3</button>
    </div>
  );
}

export default App;
