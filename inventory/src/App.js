import logo from './logo.svg';
import './App.css';

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

function Info(){
  const showtitle=true;
  const Title="this is my title";

  return(
    <div>
      <h1>{showtitle? Title: "no title"}</h1>
      <h1>Inventory system</h1>
      <p>Manage your stuff.</p>
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
