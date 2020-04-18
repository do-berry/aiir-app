import React from 'react';

class SaveTaskButton extends React.Component {
    render() {
        return (
            <div className='saveTaskButton'>
                <button
                    className='btn'
                    disabled={this.props.disabled}
                    onClick={() => this.props.onClick()}
                >
                    Save task
        </button>
            </div>
        );
    }
}

export default SaveTaskButton;