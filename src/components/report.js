import React from 'react'
import { Link } from "react-router-dom";
import { FormControl } from 'react-bootstrap';

const axios = require('axios');

class Report extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: '',
            week: null
        };
    }

    componentDidMount() {
        var data = this.getData();
        this.setState({ data: data});
    }

    getData() {
        let id = this.props.match.params.id;
        axios.get(`https://me-api.ponand.me/reports/week/${id}`)
            .then((response) => {
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
                            <Link to={`/reports/week/${this.state.week}/update`}>Redigera</Link>
                        </li>
                        <li>
                            <Link to="/reports">Rapporter</Link>
                        </li>
                    </ul>
                </nav>
                <FormControl
                    type="textarea"
                    as="textarea"
                    rows="30"
                    value={this.state.data}
                    readOnly
                />
            </div>
        );
    }
}

export default Report;
