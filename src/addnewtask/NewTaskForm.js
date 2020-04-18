import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FileUpload from './FileUpload.js';
import SaveTaskButton from './SaveTaskButton.js';
import InputField from '../login/InputField.js';

class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonDisabled: true,
            uploadedFile: false,
            taskName: ''
        }
    }

    async saveTask() {
        if (!this.state.taskName) {
            return;
        }
        if (!this.state.uploadedFile) {
            return;
        }
        this.setState({
            buttonDisabled: false
        })
    }

    async isFileChosen() {
        if (!document.getElementById("inputFile").value) {
            this.setState({
                uploadedFile: true
            })
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length < 1) {
            return;
        }
        this.setState({
            [property]: val
        })
    }

    render() {
        return (
            <Form>
                <h2>Add new task</h2>
                <hr />
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Task name</Form.Label>
                    <InputField
                        type="text"
                        placeholder="Enter task name"
                        value={this.state.taskName ? this.state.taskName : ''}
                        onChange={(val) => this.setInputValue('taskName', val)}
                    />
                </Form.Group>
                <FileUpload 
                    value={this.state.uploadedFile ? this.state.uploadedFile : ''}
                    onChange={(val) => this.isFileChosen()}
                />
                <SaveTaskButton 
                    disabled={this.state.buttonDisabled}
                    onClick={() => this.saveTask()}
                />
            </Form>
        );
    }
}

export default NewTaskForm;