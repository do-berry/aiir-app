import React from 'react';
import NewTaskComponent from './NewTaskComponent.js';

class NewTask extends React.Component {
    render() {
        return (
            <div className='newTaskPage'>
                <h2>Add new task</h2>
                <hr />
                <NewTaskComponent />
            </div>
        );
    }
}

export default NewTask;