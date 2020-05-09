import React from 'react';
import NewTaskComponent from './NewTaskComponent.js';

class NewTask extends React.Component {
    render() {
        return (
            <div className='newTaskComponent'>
                <NewTaskComponent />
            </div>
        );
    }
}

export default NewTask;