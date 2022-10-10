import React from 'react';
import { Route,Routes } from 'react-router-dom';

const welcome = () => {
    return (
        <div>
            <h1>The Welcome Page</h1>
            <Routes>
                <Route path="/welcome/new-user">
                 
                </Route>
            </Routes>
        </div>
    );
};

export default welcome;

//..// nested routing can not working    --->>>>>>>> module 10
//working about nested routing
