import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import CourseService from '../services/CourseService';
import CourseEditor from "./CourseEditor";
import ModuleService from "../services/ModuleService";
import LessonService from "../services/LessonService";
import TopicService from "../services/TopicService";

export default class WhiteBoard extends React.Component {
    constructor(props) {
        super(props);
        let courseService = CourseService.getInstance();
        let courses = courseService.findAllCourses();
         this.state = {courses: null};
        courses.then(response => this.setState({courses: response, selectedCourse: response[0]}));
        //console.log(this.state.courses);
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
        let moduleService = ModuleService.getInstance();

        return moduleService.deleteModule(id)
            .then(true);

        // return courseService.findAllCourses().then(response => this.setState({
        //     courses: response,
        //     selectedCourse: response[0]
        // })).then(true);
    };

    addModule = moduleName => {
        let courseService = CourseService.getInstance();
        let moduleService = ModuleService.getInstance();
        let lessonService = LessonService.getInstance();
        let topicService = TopicService.getInstance();

        let topic =  {
            title: "Default Topic"
        };
        let lesson = {
            title: "Default Lesson"
        };
        if(moduleName === "") {
            moduleName = "Default Module"
        }
        let newModule = {
            title: moduleName
        };

        return moduleService.createModuleForCourse(newModule, this.state.selectedCourse.id)
            .then(response => response[response.length - 1])
            .then(response => lessonService.createLessonForModule(lesson, response.id))
            .then(response => response[response.length - 1])
            .then(response => topicService.createTopicForLesson(topic, response.id))
            .then(response=> {console.log("first response", response);
                                        courseService.findAllCourses().then(response => {
                                            console.log("second response", response);
                                            this.setState({courses: response, selectedCourse: response[0]});
                                        });}).then(true);
    };


    updateCourses = () => {
        let courseService = CourseService.getInstance();
        console.log("updating courses");
        return courseService.findAllCourses().then(response => this.setState({
            courses: response,
            selectedCourse: response[0]
        })).then(true);
    };

    render() {
        return (
            <Router>
                {this.state.courses && this.state.selectedCourse.modules && <Route path='/course/edit/:id'
                       render={() => <CourseEditor course={this.state.selectedCourse}
                                                   deleteModule={this.deleteModule}
                                                   addModule={this.addModule.bind(this)}
                                                   updateCourses={this.updateCourses.bind(this)}/>}/>}
                {this.state.courses && <Route path="/course/table"
                           render={() => <CourseTable courses={this.state.courses}
                                                      deleteCourse={this.deleteCourse}
                                                      selectCourse={this.selectCourse}
                                                      addCourse={this.addCourse.bind(this)}/>}/>}
                {this.state.courses && <Route path="/course/grid"
                           render={() => <CourseGrid courses={this.state.courses}
                                                     deleteCourse={this.deleteCourse}
                                                     selectCourse={this.selectCourse}
                                                     addCourse={this.addCourse.bind(this)}/>}/>}
            </Router>
        )
    }
}