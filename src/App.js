import { deepOrange } from '@material-ui/core/colors';
import React,{useState} from 'react';
import './App.css';

function App() {

  var [todos,setTodos] = useState(['This is task 1','two','three']);
  var [input,setInput] = useState('');
  console.log(input);
  
   const myFunc = (event)=>{ 
     event.preventDefault();
     setTodos([...todos,input]);
     setInput('');
   }

  return (
    <div className="App"> 
      <h1>Learning React State</h1>
      <form>
        <input value={input} onChange={event=> setInput(event.target.value)} ></input>
        <button type="submit" onClick={myFunc}>Add Todo</button>
      </form>
      {
        todos.map((todo)=><h2>{todo}</h2>)
      }
      
    </div>
  );
}

export default App;
