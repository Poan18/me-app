import React, { useState } from 'react';
import { FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap';

const axios = require('axios');

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:1337/login', {
            email: email,
            password: password
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                console.log("hehe");
            });
    }

    return (
        <div className="login">
            <h2>Logga in</h2>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email">
                    <FormLabel>Email address</FormLabel>
                    <FormControl
                        type="email"
                        placeholder="Ange email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>

                <FormGroup controlId="password">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>

                <Button
                    variant="primary"
                    type="submit"
                    disabled={!validateForm()}
                    block
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}
