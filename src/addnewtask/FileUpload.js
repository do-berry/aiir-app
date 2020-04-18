import React from 'react';
import Form from 'react-bootstrap/Form';

const FileUpload = () => (
    <div className='fileUpload'>
        <Form.File 
            id='file-upload'
            label='File input'
            custom
        />
    </div>
);

export default FileUpload;