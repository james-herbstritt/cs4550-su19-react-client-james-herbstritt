import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseRow from '../src/containers/CourseRow';
ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <CourseRow/>
    </div>,
    document.getElementById('root')
);