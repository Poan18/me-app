import React from 'react';
import './App.css';
import Home from './components/home';
import Reports from './components/reports';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Navigation />
        <Switch>
          <Route path="/reports/week/1">
            <Reports />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
