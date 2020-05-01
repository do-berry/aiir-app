import React from 'react';
import InputField from './InputField.js';
import SubmitButton from './SubmitButton.js';
import './Login.css';
import UserStore from '../stores/UserStore.js';
import Form from 'react-bootstrap/Form';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonDisabled: false
    }
  }

  setInputValue(property, val) {
    val = val.trim();
    if (val.length > 12) {
      return;
    }
    this.setState({
      [property]: val
    })
  }

  resetForm() {
    this.setState({
      username: '',
      password: '',
      buttonDisabled: false
    })
  }

  async doLogin() {
    if (!this.state.username) {
      return;
    }
    if (!this.state.password) {
      return;
    }
    this.setState({
      buttonDisable: true
    })

    try {
      let res = await fetch('/login', {
        method: 'post',

        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      });
      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      else if (result && result.success === false) {
        this.resetForm();
        alert(result.msg);
      }
    } catch (e) {
      console.log(e);
      this.resetForm();
    }
  }

  render() {
    return (
      <Form>
        <div className='loginForm'>
        <Form.Group controlId='usernameInput'>
          <Form.Label>Username:</Form.Label>
        <InputField
            type='text'
            placeholder='username'
            value={this.state.username ? this.state.username : ''}
            onChange={(val) => this.setInputValue('username', val)}
          />
          </Form.Group>
          <Form.Group controlId='passwordInput'>
          <Form.Label>Password:</Form.Label>
          <InputField
            type='password'
            placeholder='password'
            value={this.state.password ? this.state.password : ''}
            onChange={(val) => this.setInputValue('password', val)}
          />
          </Form.Group>
          <Form.Group className='submitButton'>
          <SubmitButton
            text='Login'
            disabled={this.state.buttonDisabled}
            onClick={() => this.doLogin()}
          />
          </Form.Group>
        </div>
      </Form>
    )
  }
}

export default LoginForm;
