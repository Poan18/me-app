import React from 'react'
import { Link } from "react-router-dom";

const axios = require('axios');

class Report extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            week: null
        };
    }

    componentWillMount() {
        var data = this.getData();
        this.setState({ data: data});
    }

    getData() {
        let id = this.props.match.params.id
        axios.get(`/reports/week/${id}`)
            .then((response) => {
                console.log(response.data);
                this.setState({ data: response.data, week: id });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        return (
            <div className="reports">
            <nav className="site-navigation">
            <span>Vecka {this.state.week}</span>
              <ul>
                <li>
                  <Link to="/reports">Rapporter</Link>
                </li>
              </ul>
            </nav>
            <div>{this.state.data}</div>
            </div>
        );
    }
}

export default Report
