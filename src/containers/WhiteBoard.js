import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import CourseService from '../services/CourseService'
import CourseNavbar from "./CourseNavbar";

export default class WhiteBoard extends React.Component {
    constructor(props) {
        super(props);
        let courseService = CourseService.getInstance();
        const courses = courseService.findAllCourses();
        this.state = {
            courses: courses,
            selectedCourse: courses[0]
        };
    }

    selectCourse = course => this.setState({selectedCourse: course});

    deleteCourse = id => {
        let courseService = CourseService.getInstance();
        courseService.deleteCourse(id);
        this.setState({courses: courseService.findAllCourses()});
    };

    addCourse = courseName => {
        console.log("Course Name", courseName);
        let courseService = CourseService.getInstance();
        var course = {
            id: new Date().getTime(),
            title: courseName
        }
        courseService.createCourse(course);
        this.setState({courses: courseService.findAllCourses()});
    };

    render() {
        return (
            <Router>
                    <CourseNavbar addCourse={this.addCourse.bind(this)}/>
                    <Route path="/course/table"
                           render={() => <CourseTable courses={this.state.courses} deleteCourse={this.deleteCourse}/>}/>
                    <Route path="/course/grid"
                           render={() => <CourseGrid courses={this.state.courses}/>}/>
            </Router>
        )
    }
}