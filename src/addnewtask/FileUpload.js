import React from 'react';

class FileUpload extends React.Component {
    render() {
        return (
            <div className='inputField'>
                <input
                    type='file'
                    //accept='.obj'
                    onChange={(e) => this.props.onChange(e)}
                />
            </div>
        );
    }
}

export default FileUpload;