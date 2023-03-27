
import './App.css';
import { PropTypes } from 'prop-types';
import Info from "./info.js"

function App() {
  return (
    <div className="App">
      
     <p>Tina</p>
     <Info/>
     <Additem text ="joe"/>
     <Additem/>
     <Additem/>
     

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


export default App;
