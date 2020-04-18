import React from 'react';
import NewTaskForm from './NewTaskForm.js';

class AddNewTask extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='addNewTask'>
                <NewTaskForm />
            </div>
        );
    }
}

export default AddNewTask;