import React from 'react';
import NewTaskForm from './NewTaskForm.js';

class AddNewTask extends React.Component {
    render() {
        return (
            <div className='addNewTask'>
                <h2>Add new task</h2>
                <hr />
                <NewTaskForm />
            </div>
        );
    }
}

export default AddNewTask;