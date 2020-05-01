import React from 'react';
import Form from 'react-bootstrap/Form';
import FileUpload from './FileUpload.js';
import SaveTaskButton from './SaveTaskButton.js';
import InputField from '../login/InputField.js';
import './NewTaskForm.css';
import './CameraPosition.css';
import { Row, Col } from 'reactstrap';
import update from 'react-addons-update';

class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonDisabled: false,
            taskName: '',
            floatSize: 3,
            camera_position: [null, null, null],
            camera_rotation: [null, null, null],
            light_position: [null, null, null],
            light_intensity: 0,
            file: null
        }
    }

    resetForm() {
        this.setState({
            buttonDisabled: false,
            taskName: '',
            camera_position: [null, null, null],
            camera_rotation: [null, null, null],
            light_position: [null, null, null],
            light_intensity: 0,
            file: null
        })
    }

    async saveTask() {
        if (!this.state.taskName) {
            return;
        }
        this.setState({
            buttonDisabled: true
        });

        try {
            // sending form
            let res = await fetch('/newtaskform', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'taskName': this.state.taskName,
                    'camera_position': this.state.camera_position,
                    'camera_rotation': this.state.camera_rotation,
                    'light_position': this.state.light_position,
                    'light_intensity': this.state.light_intensity
                })
            });
            // sending file
            let formData = new FormData();
            formData.append('file', this.state.file);
            let senddata = await fetch('/newtaskform', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            });
            let result = await res.json();
            let result2 = await senddata.json();
            console.log(result.body.data);
            console.log(result2.body.data);
        } catch (e) {
            this.resetForm();
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
        console.log(property + " = " + val);
    }

    updateValueInArray(property, val) {
        property = val;
        this.forceUpdate();
    }

    handleChange = (e) => {
        var files = e.target.files;
        this.state.file = files[0];
        console.log(this.state.file.toString());
        console.log(document.querySelector('input[type="file"]').files[0]);
    };

    render() {
        return (
            <Form>
                <h2>Add new task</h2>
                <hr />
                <Form.Group controlId="formTaskName">
                    <Form.Label>Enter task name:</Form.Label>
                    <div className='taskNameInput'>
                        <InputField
                            type="text"
                            placeholder="Task name"
                            value={this.state.taskName ? this.state.taskName : ''}
                            onChange={(val) => this.setInputValue('taskName', val)}
                        />
                    </div>
                </Form.Group>
                <Form.Label>Camera position [x, y, z]:</Form.Label>
                <Form.Group controlId="cameraPositionForm">
                    <div className='cameraPositionDiv'>
                        <div className='cameraPosition'>
                            <Row xs='3'>
                                <Col xs='auto'>
                                    <InputField
                                        type="number"
                                        step="0.0001"
                                        placeholder="0,0000"
                                        value={this.state.camera_position[0]}
                                        onChange={(val) => {
                                            this.state.camera_position[0] = val;
                                            this.forceUpdate();
                                        }}
                                    />
                                </Col>
                                <Col xs='auto'>
                                    <InputField
                                        type="number"
                                        step="0.0001"
                                        placeholder="0,0000"
                                        value={this.state.camera_position[1]}
                                        onChange={(val) => {
                                            this.state.camera_position[1] = val;
                                            this.forceUpdate();
                                        }}
                                    />
                                </Col>
                                <Col xs='auto'>
                                    <InputField
                                        type="number"
                                        step="0.0001"
                                        placeholder="0,0000"
                                        value={this.state.camera_position[2]}
                                        onChange={(val) => {
                                            this.state.camera_position[2] = val;
                                            this.forceUpdate();
                                        }}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Form.Group>
                <Form.Label>Camera rotation [x, y, z]:</Form.Label>
                <Form.Group controlId="cameraRotationForm">
                    <div className='cameraRotationDiv'>
                        <div className='cameraRotation'>
                            <Row xs='3'>
                                <Col xs='auto'>
                                    <InputField
                                        type="number"
                                        step="0.0001"
                                        placeholder="0,0000"
                                        value={this.state.camera_rotation[0]}
                                        onChange={(val) => {
                                            this.state.camera_rotation[0] = val;
                                            this.forceUpdate();
                                        }}
                                    />
                                </Col>
                                <Col xs='auto'>
                                    <InputField
                                        type="number"
                                        step="0.0001"
                                        placeholder="0,0000"
                                        value={this.state.camera_rotation[1]}
                                        onChange={(val) => {
                                            this.state.camera_rotation[1] = val;
                                            this.forceUpdate();
                                        }}
                                    />
                                </Col>
                                <Col xs='auto'>
                                    <InputField
                                        type="number"
                                        step="0.0001"
                                        placeholder="0,0000"
                                        value={this.state.camera_rotation[2]}
                                        onChange={(val) => {
                                            this.state.camera_rotation[2] = val;
                                            this.forceUpdate();
                                        }}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Form.Group>
                <Form.Label>Light position [x, y, z]:</Form.Label>
                <Form.Group controlId="lightPositionForm">
                    <div className='lightPositionDiv'>
                        <div className='lightPosition'>
                            <Row xs='3'>
                                <Col xs='auto'>
                                    <InputField
                                        type="number"
                                        step="0.0001"
                                        placeholder="0,0000"
                                        value={this.state.light_position[0]}
                                        onChange={(val) => {
                                            this.state.light_position[0] = val;
                                            this.forceUpdate();
                                        }}
                                    />
                                </Col>
                                <Col xs='auto'>
                                    <InputField
                                        type="number"
                                        step="0.0001"
                                        placeholder="0,0000"
                                        value={this.state.light_position[1]}
                                        onChange={(val) => {
                                            this.state.light_position[1] = val;
                                            this.forceUpdate();
                                        }}
                                    />
                                </Col>
                                <Col xs='auto'>
                                    <InputField
                                        type="number"
                                        step="0.0001"
                                        placeholder="0,0000"
                                        value={this.state.light_position[2]}
                                        onChange={(val) => {
                                            this.state.light_position[2] = val;
                                            this.forceUpdate();
                                        }}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Light intensity:</Form.Label>
                    <InputField
                        type='number'
                        step='0.0001'
                        placeholder='0,0000'
                        value={this.state.light_intensity}
                        onChange={(val) => this.setInputValue('light_intensity', val)}
                    />
                </Form.Group>
                <Form.Group controlId="formObjFile">
                    <Form.Label>Enter .obj file:</Form.Label>
                    <FileUpload
                        id='inputFile'
                        onChange={e => {this.handleChange(e); this.forceUpdate();}}
                    />
                </Form.Group>
                <Form.Group controlId="formSaveTask">
                    <SaveTaskButton
                        disabled={this.state.buttonDisabled}
                        onClick={() => this.saveTask()}
                    />
                </Form.Group>
            </Form>
        );
    }
}

export default NewTaskForm;
