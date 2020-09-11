import React from 'react'
import { Link } from "react-router-dom";
import CreateWeek from './createWeek';

const axios = require('axios');

class Report extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            isLoading: true
        };
    }

    componentWillMount() {
        var data = this.getData();
        this.setState({ data: data});
    }

    getData() {
        axios.get(`/reports`)
            .then((response) => {
                this.setState({ data: response.data, isLoading: false });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/reports')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    renderReports() {
        const entries = Object.entries(this.state.data);

        return entries.map((content) => (
            <div key={content[1].week}>
                <Link to={`/reports/week/${content[1].week}`}>Vecka: {content[1].week}</Link>
            </div>
        ))
    }

    render() {
        return (
            <div className="reports">
                <nav className="site-navigation">
                <span>Rapporter</span>
                </nav>
                <div>
                { this.state.isLoading ? 'Loading reports...' : [this.renderReports()
                , <CreateWeek newWeek={this.state.data.length+1} />] }
                </div>
            </div>
        )
    }
}

export default Report;
