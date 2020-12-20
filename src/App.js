import './App.css';
import Main from './components/Main'
import Home from './components/Home'
import Instructions from './components/Instructions'


function App() {
  // console.log({data})
  return (
    <div className="App">
     <Home />
     <Instructions />
     <Main />
    </div>
  );
}

export default App;
