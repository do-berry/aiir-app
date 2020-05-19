import React from 'react';
import JsonEditor from './JsonEditor.js';
import ObjFileInput from './ObjFileInput.js';
import SaveButton from './SaveButton.js';
import axios from 'axios';
import example from '../defaults/example.json';
import Form from 'react-bootstrap/Form';

class NewTaskComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            configFile: null,
            selectedFiles: null
        }
    }

    componentDidMount() {
        this.setState({ configFile: require('../defaults/example.json') });
    }

    handleJsonChange(val) {
        this.setState({ configFile: JSON.parse(val.jsObject) });
    }

    handleFileInputChange(event) {
        this.setState({ selectedFiles: event.target.files });
        console.log(this.state.configFile);
    }

    handleClick() {
        if (!this.state.selectedFiles) {
            return;
        }

        const configJSONFile = new Blob([JSON.stringify(this.state.configFile)], {
            //
        });
        configJSONFile.lastModifiedDate = new Date();
        //configJSONFile.filename = 'configJSONFile.json';

        const data = new FormData();
        data.append('configJSONFile', configJSONFile, 'configJSONFile.json');
        // for (var i = 0; i < this.state.selectedFiles.length; i++) {
        //     data.append('objFile[' + i.toString() + ']', this.state.selectedFiles[i]);
        // }
        data.append('objFile', this.state.selectedFiles[0]);

        try {
            axios.post('http://127.0.0.1:8000/addnewtask/', data, {
                'content-type': 'multipart/form-data'
            }).then(res => {
                console.log(res);
            })
        } catch (e) {
            return;
        }
    }

    render() {
        return (
            <div className='newTask'>
                <Form>
                    <Form.Label>Edit config file:</Form.Label>
                    <Form.Group>
                        <JsonEditor
                            placeholder={example}
                            onChange={(val) => this.handleJsonChange(val)}
                        />
                    </Form.Group>
                    <Form.Label>Upload .obj files:</Form.Label>
                    <Form.Group>
                        <ObjFileInput
                            onChange={(e) => this.handleFileInputChange(e)}
                        />
                    </Form.Group>
                    <SaveButton
                        onClick={() => { this.handleClick() }}
                    />
                </Form>
            </div>
        );
    }
}

export default NewTaskComponent;