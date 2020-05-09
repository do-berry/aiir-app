import React from 'react';
import Button from 'react-bootstrap/Button';

class SaveButton extends React.Component {
    render() {
        return (
            <div className='uploadFilesAndSave'>
                <br />
                <Button
                    variant="dark"
                    onClick={() => this.props.onClick()}
                >
                    Upload files and save
                </Button>
                <br />
            </div>
        );
    }
}

export default SaveButton;