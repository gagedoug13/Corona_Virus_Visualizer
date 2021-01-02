import './App.css';
import Main from './components/Main'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


function App() {
  // console.log({data})
  return (
      <div className="App">
        <Home />

        <Main />
      </div>
    
  );
}

export default App;
