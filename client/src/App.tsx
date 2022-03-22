// import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Fib from './Fib';
import OtherPage from './OtherPage';
import './App.css';


function App() {
  return (
    <Router>
      {/* <Fib /> */}
      <header>
        <Link to='/'>Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      

      <Switch>
        <Route path="/" component={Fib} exact />
        <Route path={`/otherpage`} component={OtherPage} />
      </Switch>
            

       
        
      
    </Router>
  )
}

export default App;
