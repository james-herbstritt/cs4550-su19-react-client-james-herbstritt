import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseNavbar from './containers/CourseNavbar'
import CourseTable from "./containers/CourseTable";

ReactDOM.render(
    <div>
        <CourseNavbar/>
        <CourseTable/>
    </div>,
    document.getElementById('root')
);