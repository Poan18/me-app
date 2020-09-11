import React from 'react'
import { Link } from "react-router-dom";
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

const axios = require('axios');

class CreateWeek extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: '',
            week: this.props.newWeek,
            redirect: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/reports', {
            week: event.target.week.value,
            content: event.target.content.value
        })
            .then(function (response) {
                console.log(response.data);
                if (response.data) {
                    window.alert("Error.");
                } else {
                    window.location.reload();
                    window.alert("New week created.");
                }
            })
            .catch(function (error) {
                console.log(error);
            })

        // this.setState({  redirect: `/reports/week/${this.state.week}` });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="create-week">
                <h2>Skapa ny vecka</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="week">
                        <FormLabel>Vecka</FormLabel>
                        <FormControl
                            type="number"
                            value={this.props.newWeek}
                            disabled
                        />
                    </FormGroup>

                    <FormGroup controlId="content">
                        <FormLabel>Text</FormLabel>
                        <FormControl
                            type="textarea"
                            as="textarea"
                            rows="10"
                            placeholder="Skriv din text här..."
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
        )
    }
}

export default CreateWeek;
