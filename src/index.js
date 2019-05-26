import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseList from '../src/containers/CourseList';
import CourseNavbar from './containers/CourseNavbar'

ReactDOM.render(
    <div>
        <CourseNavbar/>
        <CourseList/>
    </div>,
    document.getElementById('root')
);