import React from 'react';
import Form from 'react-bootstrap/Form';

class FileUpload extends React.Component {
    render() {
        return (
            <div
                className='fileUpload'
                id='inputFile'
            >
                <Form.File.Label>Select file</Form.File.Label>
                <Form.File.Input
                    //accept='.obj'
                />
            </div>
        );
    }
}

export default FileUpload;