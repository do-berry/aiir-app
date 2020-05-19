import React from 'react';
import AllTasksComponent from './AllTasksComponent.js';

class AllTasks extends React.Component {
    render() {
        return(
            <div className='allTasks'>
                <h2>All tasks</h2>
                <hr />
                <AllTasksComponent />
            </div>
        );
    }
}

export default AllTasks;