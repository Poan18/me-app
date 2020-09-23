import React from 'react'
import { FormControl } from 'react-bootstrap';
const axios = require('axios');

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: '',
        };
    }

    componentDidMount() {
        var data = this.getData();
        this.setState({ data: data});
    }

    getData() {
        axios.get(`http://localhost:1337/`)
            .then((response) => {
                this.setState({ content: response.data.data.msg });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        return (
            <div className="home">
                <h1>JSRamverk</h1>
                <FormControl
                    type="textarea"
                    as="textarea"
                    rows="15"
                    value={this.state.content}
                    readOnly
                />
            </div>
        );
    }
}

export default Home;
