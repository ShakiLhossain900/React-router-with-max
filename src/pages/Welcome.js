import React from 'react';
import { Route,Routes } from 'react-router-dom';

const welcome = () => {
    return (
        <div>
            <h1>The Welcome Page</h1>
            <Routes>
                <Route path="/welcome/new-user">
                 Welcome, new User!
                </Route>
            </Routes>
        </div>
    );
};

export default welcome;