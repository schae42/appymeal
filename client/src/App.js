import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import LogReg from './views/LogReg';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <LogReg path="/"/>
        <Main path="/dashboard"/>
      </Router>
    </div>
  );
}

export default App;
