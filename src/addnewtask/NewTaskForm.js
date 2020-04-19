import React from 'react';
import Form from 'react-bootstrap/Form';
import FileUpload from './FileUpload.js';
import SaveTaskButton from './SaveTaskButton.js';
import InputField from '../login/InputField.js';

class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonDisabled: true,
            taskName: '',
            fileName: ''
        }
        this.fileInput = React.createRef();
    }

    async saveTask() {
        if (!this.state.taskName) {
            return;
        }
        if (!this.state.taskName) {
            return;
        }
        this.setState({
            buttonDisabled: false
        })
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

    handleChange = (e) => {
        var files = e.target.files;
        if (files[0].name !== '') {
            this.state.fileName = files[0].name;
        }
        console.log("fileName: ", this.state.fileName);
    };

    render() {
        return (
            <Form>
                <h2>Add new task</h2>
                <hr />
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter task name:</Form.Label>
                    <InputField
                        type="text"
                        placeholder="Task name"
                        value={this.state.taskName ? this.state.taskName : ''}
                        onChange={(val) => this.setInputValue('taskName', val)}
                    />
                </Form.Group>
                <Form.Label>Enter .obj file:</Form.Label>
                <FileUpload
                    id='inputFile'
                    onChange={e => this.handleChange(e)}
                />
                <SaveTaskButton
                    disabled={!this.state.taskName && !this.state.fileName}
                    onClick={() => this.saveTask()}
                />
            </Form>
        );
    }
}

export default NewTaskForm;