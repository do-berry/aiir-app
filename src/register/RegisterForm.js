import React from 'react';
import InputField from '../login/InputField.js';
import { Row, Col, Button } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './RegisterForm.css';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    async createAccount() {
        if (!this.state.firstName) {
            return;
        }
        if (!this.state.lastName) {
            return;
        }
        if (!this.state.email) {
            return;
        }
        if (!this.state.password) {
            return;
        }

        try {
            let res = await fetch('/createNewAccount', {
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
              })
            });
            let result = await res.json();
            if (result && result.success) {
                alert("Account was created.");
            }
            else if (result && result.success === false) {
              alert("Cannot create account.");
            }
          } catch (e) {
            console.log(e);
          }
    }

    render() {
        return (
            <div className='registerForm'>
                <Form>
                    <Container>
                        <Form.Group>
                            <Form.Row xs='2' md='2'>
                                <Col>
                                    <Form.Label>First name:</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Label>Last name:</Form.Label>
                                </Col>
                            </Form.Row>
                            <Form.Row xs='2' md='2'>
                                <Col>
                                    <Form.Control
                                        id='firstName'
                                        type='text'
                                        name='firstName'
                                        placeholder="First name"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        id='lastName'
                                        type='text'
                                        name='lastName'
                                        placeholder="Last name"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Row xs='2' md='2'>
                                <Col>
                                    <Form.Label>
                                        E-mail address:
                            </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control
                                        id='email'
                                        type='email'
                                        name='email'
                                        placeholder="E-mail address"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Row xs='2' md='2'>
                                <Col>
                                    <Form.Label>
                                        Password:
                            </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control
                                        id='password'
                                        type='password'
                                        name='password'
                                        placeholder="Password"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    </Container>
                    <Form.Group>
                        <Button
                            variant="light"
                            onClick={() => this.createAccount()}
                        >
                            Register
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default RegisterForm;
