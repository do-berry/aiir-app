import React from 'react';
import Button from 'react-bootstrap/Button';
import './ObjFileInput.css';

class ObjFileInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFields: ['input-0']
        }
    }

    appendInput = () => {
        var newInput = `input-${this.state.inputFields.length}`;
        this.setState(prevState => ({
            inputFields: prevState.inputFields.concat([newInput])
        }));
    }

    render() {
        return (
            <div className='fileInput'>
                <br />
                <input
                    type='file'
                    id="fileInput"
                    label="File input"
                    accept='.jpg'           // will be changed to .obj
                    onChange={(e) => this.props.onChange(e)}
                    multiple
                />
                <br />
            </div>
        );
    }
}

export default ObjFileInput;