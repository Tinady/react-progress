
import './App.css';
import { PropTypes } from 'prop-types';
import Info from "./info.js"
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      
     <p>Tina</p>
     <Info/>
     <Additem text ="joe"/>
     <ButtonState/>
     

    </div>
  );
}



function Additem(props){
  
  return(
    <div>
      <form>
        <label for="text-form"> type something </label>
        <input type="text" value= {props.number} id="text-form"/>
        </form>
        <p>{props.number}</p>
      
    </div> 
  )
}

Additem.defaultProps={
  number:2
}

Additem.propTypes={
  n:PropTypes.number
}

function ButtonState(){
  const[title, setTitle]=useState("");
  const[count, setCount]=useState(0);

  const updateTitle= () =>{
    setTitle("here is the Title");
  }

  const updateButton= ()=>{
    setCount(count+1); 
  }

  return(
    <div>
      <p> title:{title} </p>
    <p>count:{count}</p>
    <button onClick={updateTitle}>Change Title</button>
    <button onClick={updateButton}>Update Button</button>
    </div>
    
  )


}


export default App;
