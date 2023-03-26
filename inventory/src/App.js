
import './App.css';
import Info from "./info.js"

function App() {
  return (
    <div className="App">
      
     <p>Tina</p>
     <Info/>
     <Additem/>
     <Additem/>
     <Additem/>
     

    </div>
  );
}



function Additem(){
  return(
    <div>
      <form>
        <label for="text-form"> type something </label>
        <input type="text" id="text-form"/>
        </form>
      
    </div>
  )
}


export default App;
