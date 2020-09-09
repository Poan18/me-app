import React from 'react';
import './App.css';
import Home from './components/home';
import Reports from './components/reports';
import Register from './components/register';
import Login from './components/login';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const token = "";

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/reports/week/1">
                        <Reports />
                    </Route>
                    <Route path="/login">
                        <Login token={token} />
                    </Route>
                    <Route path="/register">
                        <Register />
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
