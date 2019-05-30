import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import CourseService from '../services/CourseService';
import CourseEditor from "./CourseEditor";

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

    selectCourse = id => {
        let courseService = CourseService.getInstance();
        console.log("selecting ", id);
        this.setState({selectedCourse: courseService.findCourseById(id)});
    };


    deleteCourse = id => {
        let courseService = CourseService.getInstance();
        courseService.deleteCourse(id);
        this.setState({courses: courseService.findAllCourses()});
    };

    addCourse = courseName => {
        console.log("Course Name", courseName);
        let courseService = CourseService.getInstance();
        if (courseName === "") {
            courseName = "New Course Title";
        }
        var course = {
            id: new Date().getTime(),
            title: courseName
        };
        courseService.createCourse(course);
        this.setState({courses: courseService.findAllCourses()});
    };

    render() {
        return (
            <Router>
                <Route path='/course/edit/:id'
                       render={() => <CourseEditor course={this.state.selectedCourse}
                                                   deleteCourse={this.deleteCourse}/>}/>
                    <Route path="/course/table"
                           render={() => <CourseTable courses={this.state.courses}
                                                      deleteCourse={this.deleteCourse}
                                                      selectCourse={this.selectCourse}
                                                      addCourse={this.addCourse.bind(this)}/>}/>
                    <Route path="/course/grid"
                           render={() => <CourseGrid courses={this.state.courses}
                                                     deleteCourse={this.deleteCourse}
                                                     selectCourse={this.selectCourse}
                                                     addCourse={this.addCourse.bind(this)}/>}/>
            </Router>
        )
    }
}