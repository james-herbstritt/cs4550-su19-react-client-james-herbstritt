import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseList from '../src/containers/CourseList';

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <CourseList/>
    </div>,
    document.getElementById('root')
);