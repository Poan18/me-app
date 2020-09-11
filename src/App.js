import React from 'react';
import './App.css';
import Home from './components/home';
import Report from './components/report';
import Reports from './components/reports';
import Register from './components/register';
import Login from './components/login';
import Navigation from './components/navigation';
import CreateWeek from './components/createWeek';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/reports/week/:id" component={Report} />
                    <Route path="/reports/" component={Reports} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/reports/week/create" component={CreateWeek} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
