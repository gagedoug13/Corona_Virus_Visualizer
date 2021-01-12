import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Instructions from './components/Instructions'
import Main from './components/Main'

function App() {
  // console.log({data})
  return (
    <Router>
      <div className="App">
        {/* <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/instructions' component={Instructions}/>
        </Switch> */}
        <Main />
      </div>
    </Router>
     
  );
}

export default App;
