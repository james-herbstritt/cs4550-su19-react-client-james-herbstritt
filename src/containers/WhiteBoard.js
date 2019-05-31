import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
        var topics =  [{
            id: new Date().getTime(),
            title: "Default Topic"
        }];
        var lessons = [{
            id: new Date().getTime(),
            title: "Default Lesson",
            topics: topics
        }];
        var modules = [{
            id: new Date().getTime(),
            title: "Default Module",
            lessons: lessons
        }];
        var course = {
            id: new Date().getTime(),
            title: courseName,
            modules: modules
        };
        courseService.createCourse(course);
        this.setState({courses: courseService.findAllCourses()});
    };

    deleteModule = id => {
        let courseService = CourseService.getInstance();
        let newCourse = {
            id: this.state.selectedCourse.id,
            title: this.state.selectedCourse.title,
            modules: this.state.selectedCourse.modules.filter(module => module.id !== id)
        };
        courseService.updateCourse(this.state.selectedCourse.id, newCourse);
        this.setState({courses: courseService.findAllCourses()});
        this.selectCourse(this.state.selectedCourse.id);
    };

    addModule = moduleName => {
        let courseService = CourseService.getInstance();
        var topics =  [{
            id: new Date().getTime(),
            title: "Default Topic"
        }];
        var lessons = [{
            id: new Date().getTime(),
            title: "Default Lesson",
            topics: topics
        }];
        let newModule = {
            id: new Date().getTime(),
            title: moduleName,
            lessons: lessons
        };
        let newCourse = {
            id: this.state.selectedCourse.id,
            title: this.state.selectedCourse.title,
            modules: [...this.state.selectedCourse.modules, newModule]
        };

        courseService.updateCourse(this.state.selectedCourse.id, newCourse);
        this.setState({courses: courseService.findAllCourses()});
        this.selectCourse(this.state.selectedCourse.id);
    };

    render() {
        return (
            <Router>
                <Route path='/course/edit/:id'
                       render={() => <CourseEditor course={this.state.selectedCourse}
                                                   deleteModule={this.deleteModule}
                                                   addModule={this.addModule.bind(this)}/>}/>
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