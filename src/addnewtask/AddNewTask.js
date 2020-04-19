import React from 'react';
import NewTaskForm from './NewTaskForm.js';
import axios from 'axios';

class AddNewTask extends React.Component {
    render() {
        return (
            <div className='addNewTask'>
                <NewTaskForm />
            </div>
        );
    }
}

export default AddNewTask;