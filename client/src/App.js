import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Spectre.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Default from './Default';
import Fib from './Fib';
import History from './History';
import Docs from './Docs';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="columns">
              <div className="column col-7">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>Realizacja zadania nr1 w ramach laboratorium PFSwCO</h3>
                <h2>Maciej Sójka</h2>
                <button class="btn btn-lg">
                  <Link to="/">Strona główna</Link>
                </button>
                <button class="btn btn-lg">
                  <Link to="/fib">Oblicz n-ty element ciągu</Link>
                </button>
                <button class="btn btn-lg">
                  <Link to="/docs">Dokumentacja</Link>
                </button>
              </div>
              <div className="column col-5">
                <Route exact path="/" component={Default} />
                <Route exact path="/fib" component={Fib} />
                <Route exact path="/history" component={History} />
                <Route exact path="/docs" component={Docs} />
              </div>
            </div>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
