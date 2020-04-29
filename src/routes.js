import React from 'react';
import { Route } from 'react-router-dom';

import Login from './login/Login.js';
import AddNewTask from './addnewtask/AddNewTask.js';
import NewTaskForm from './addnewtask/NewTaskForm.js';

const BaseRouter = () => (
    <div>
        <Route exact path='/login' component={Login} />
        <Route exact path='/addnewtask' component={AddNewTask} />
    </div>
);

export default BaseRouter;