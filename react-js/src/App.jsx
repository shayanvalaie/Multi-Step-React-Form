import React from "react";
import "./index.css";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Signup />
    </div>
  );
}

export default App;

// <input
//   className="border-2 border-yellow-500 rounded p-4 text-2xl w-full"
//   name="name"
//   placeholder="name"
//   value={name}
//   onChange={({ target }) => setName(target.value)}
// />
