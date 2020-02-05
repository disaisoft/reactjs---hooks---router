import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import Contacto from './pages/Contacto';
import QuienSoy from './pages/QuienSoy';

function App() {
  return (
    <div className="App">
      <h1>La Mega Nave de Dave!</h1> 


      <Router>
        <div>
        <Link to="/Home">
          <button className="btn btn-primary">Home</button>
          </Link>
          <Link to="/Contacto">
          <button className="btn btn-primary">Contacto</button>
          </Link>
          <Link to="/QuienSoy">
          <button className="btn btn-primary">Quien Soy</button>
          </Link>
          
        </div>

        <Switch>
          <Route path="/Contacto">
            <Contacto />
          </Route>
          <Route path="/QuienSoy">
            <QuienSoy />
          </Route>
        </Switch>
      </Router> 
    </div>

    
    
  );
}

export default App;
