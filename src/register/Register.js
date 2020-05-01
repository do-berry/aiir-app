import React from 'react';
import RegisterForm from './RegisterForm.js';

class Register extends React.Component {
    render() {
        return(
            <div className='registerPage'>
                <h2>Create new account</h2>
                <hr />
                <RegisterForm />
            </div>
        );
    }
}

export default Register;
