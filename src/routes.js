import React from 'react';
import { Route } from 'react-router-dom';

import Login from './login/Login.js';
import AllTasks from './alltasks/AllTasks.js';
import Register from './register/Register.js';
import NewTask from './addnewtask/NewTask.js';

const BaseRouter = () => (
    <div>
        <Route exact path='/login' component={Login} />
        <Route exact path='/addnewtask' component={NewTask} />
        <Route exact path='/alltasks' component={AllTasks} />
        <Route exact path='/register' component={Register} />
    </div>
);

export default BaseRouter;