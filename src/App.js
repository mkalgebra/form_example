import './App.css';
import { useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  function handleChange(e){
    setMsg(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    alert(msg)
  }

  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
      <label>
        Pozdravna poruka:
        <input type="text" value={msg} onChange={handleChange}></input>
      </label>
      <input type="submit" value="Submit"></input>
     </form>
    </div>
  );
}

export default App;
