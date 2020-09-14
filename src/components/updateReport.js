import React from 'react'
import { Link } from "react-router-dom";
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

const axios = require('axios');

class UpdateWeek extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: '',
            week: '',
            redirect: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var data = this.getData();
        this.setState({ data: data});
    }

    getData() {
        let id = this.props.match.params.id
        axios.get(`/reports/week/${id}`)
            .then((response) => {
                this.setState({ content: response.data, week: id });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/reports/update', {
            week: event.target.week.value,
            content: event.target.content.value
        })
        .then(function (response) {
            if (response.data.data.msg !== undefined) {
                window.alert("Week updated.");
            } else {
                window.alert(response.data.data.error);
            }
        })
        .catch(function (error) {
            console.error(error);
        })

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="reports">
            <nav className="site-navigation">
            <span><Link to={`/reports/week/${this.state.week}`} >Vecka {this.state.week}</Link></span>
            </nav>
            <div className="update-report">
                <h2>Redigera vecka</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="week">
                        <FormLabel>Vecka</FormLabel>
                        <FormControl
                            type="number"
                            value={this.state.week}
                            disabled
                        />
                    </FormGroup>

                    <FormGroup controlId="content">
                        <FormLabel>Text</FormLabel>
                        <FormControl
                            type="textarea"
                            as="textarea"
                            rows="30"
                            value={this.state.content}
                            onChange={e => this.setState({ content: e.target.value })}
                        />
                    </FormGroup>

                    <Button
                        variant="primary"
                        type="submit"
                        block
                    >
                        Submit
                    </Button>
                </form>
            </div>
            </div>
        )}
}

export default UpdateWeek;
