import React from 'react';
import './App.css';
import Home from './components/home';
import Report from './components/report';
import Reports from './components/reports';
import Register from './components/register';
import Login from './components/login';
import Navigation from './components/navigation';
import CreateReport from './components/createReport';
import UpdateReport from './components/updateReport';
import Chat from './components/chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/reports/week/:id/update" component={UpdateReport} />
                    <Route exact path="/reports/week/:id" component={Report} />
                    <Route path="/reports/" component={Reports} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/reports/week/create" component={CreateReport} />
                    <Route path="/chat" component={Chat} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
