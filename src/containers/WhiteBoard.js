import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import CourseService from '../services/CourseService'
import CourseHeader from "./CourseHeader";
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

    selectCourse = course =>
        this.setState({selectedCourse: course});

    render() {
        return (
            <Router>
                <div>
                    <Link to="/course/table">Table</Link>
                    | <Link to="/course/grid">Grid</Link>
                    <CourseNavbar/>
                    <Route path="/course/table"
                           render={() => <CourseTable courses={this.state.courses}/>}/>
                    <Route path="/course/grid"
                           render={() => <CourseGrid courses={this.state.courses}/>}/>
                </div>
            </Router>
        )
    }
}