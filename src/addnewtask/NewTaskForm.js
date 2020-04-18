import React from 'react';
import Form from 'react-bootstrap/Form';
import FileUpload from './FileUpload.js';

const NewTaskForm = () => (
    <Form>
        <h2>Add new task</h2>
        <hr />
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Task name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <FileUpload />
    </Form>
);

export default NewTaskForm;