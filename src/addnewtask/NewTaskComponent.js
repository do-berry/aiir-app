import React from 'react';
import JsonEditor from './JsonEditor.js';
import ObjFileInput from './ObjFileInput.js';
import SaveButton from './SaveButton.js';
import axios from 'axios';
import example from '../defaults/example.json';

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
            type: 'application/json'
        });

        const data = new FormData();
        data.append('configJSONFile', configJSONFile);
        for (var i = 0; i < this.state.selectedFiles.length; i++) {
            data.append('objFile[' + i.toString() + ']', this.state.selectedFiles[i]);
        }

        try {
            axios.post('/addnewtask', data, {
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
                <div className='jsonEditor'>
                    <JsonEditor
                        placeholder={example}
                        onChange={(val) => this.handleJsonChange(val)}
                    />
                </div>
                <div className='objFileInput'>
                    <ObjFileInput
                        onChange={(e) => this.handleFileInputChange(e)}
                    />
                </div>
                <div className='saveButton'>
                    <SaveButton
                        onClick={() => { this.handleClick() }}
                    />
                </div>
            </div>
        );
    }
}

export default NewTaskComponent;