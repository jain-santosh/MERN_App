import { useState } from "react";

function StateVariable () {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  
  return (
    <div>
      <h2>User Profile</h2>
      <input 
        type="text" 
        placeholder="Enter name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <br /> <br />
      <input 
        type="number" 
        placeholder="Enter age" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      /> 
      <br /> <br />
      <h3>Preview:</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default StateVariable;