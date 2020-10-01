import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Belajar from './component/Belajar'
import RoutingPage from './component/RoutingPage'

// import Inline from './page/Inline'
// import Internal from './page/Internal'
// import Eksternal from './page/Eksternal'
// import Custom from './page/Custom'


function App() {
  return (
    <div className="App">   
    {
      // <Inline />
      // <Internal />
      // <Eksternal />
      // <Custom />
    }
    <Router>
      <RoutingPage />
      {
       // <Link to="/">Home </Link>
      // <Link to="/about">About </Link>
      // <Link to="/belajar">Belajar </Link> 
      }
      

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/belajar">
          <Belajar />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>    
  );
}

export default App;
