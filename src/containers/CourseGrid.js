import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseCard from './CourseCard';
import CourseNavbar from "./CourseNavbar";
import CourseHeader from "./CourseHeader";

export default class CourseGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div className="card-deck">
                { this.props.courses.map((course, key) => <CourseCard course={course} key={key}/>)}
            </div>

        )
    }
}