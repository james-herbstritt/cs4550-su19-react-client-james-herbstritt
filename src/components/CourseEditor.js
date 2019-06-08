import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';
import TopicPills from './TopicPills';
import CourseEditorNavbar from "./CourseEditorNabvbar";
import CourseService from "../services/CourseService";

import WidgetListContainer from "../containers/WidgetListContainer"
import {createStore} from "redux";
import {Provider} from 'react-redux';
import WidgetReducer from '../reducers/WidgetReducer';

const store = createStore(WidgetReducer);

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedModule: this.props.course.modules[0],
            selectedLesson: this.props.course.modules[0].lessons[0],
            selectedTopic: this.props.course.modules[0].lessons[0].topics[0]
        }
    }

    selectModule = module =>
        this.setState({selectedModule: module,
                             selectedLesson: module.lessons[0],
                             selectedTopic: module.lessons[0].topics[0]});
    selectLesson = lesson =>
        this.setState({selectedLesson: lesson,
                             selectedTopic: lesson.topics[0]});
    selectTopic = topic =>
        this.setState({selectedTopic: topic});

    createLesson = lessonName => {
        let courseService = CourseService.getInstance();
        var topics =  [{
            id: new Date().getTime(),
            title: "Default Topic"
        }];
        var lesson = {
            id: new Date().getTime(),
            title: lessonName,
            topics: topics
        };
        this.state.selectedModule.lessons.push(lesson);
        courseService.updateCourse(this.props.course.id, this.props.course);
        this.props.updateCourses();
    };

    deleteLesson = id => {
        let courseService = CourseService.getInstance();

        this.state.selectedModule.lessons = this.state.selectedModule.lessons.filter(lesson => lesson.id !== id);

        let newCourse = {
            id: this.props.course.id,
            title: this.props.course.title,
            modules: this.props.course.modules
        };
        courseService.updateCourse(this.props.course.id, newCourse);
    };

    createTopic = topicName => {
        console.log("creating topic", topicName);
        let courseService = CourseService.getInstance();
        var topic = {
            id: new Date().getTime(),
            title: topicName
        };

        this.state.selectedLesson.topics.push(topic);
        courseService.updateCourse(this.props.course.id, this.props.course);
        this.props.updateCourses();
    };

    deleteTopic = id => {
        let courseService = CourseService.getInstance();

        this.state.selectedLesson.topics = this.state.selectedLesson.topics.filter(topic => topic.id !== id);

        let newCourse = {
            id: this.props.course.id,
            title: this.props.course.title,
            modules: this.props.course.modules
        };
        courseService.updateCourse(this.props.course.id, newCourse);
    };

    findCourseById = id =>
        this.courses.find(function (element) {
            return element.id === id;
        });

    editModule = (moduleName, moduleId) => {
        let courseService = CourseService.getInstance();

        this.props.course.modules.find(function (element){
            return element.id === moduleId;
        }).title = moduleName;

        courseService.updateCourse(this.props.course.id, this.props.course);
        this.props.updateCourses();
    };

    editLesson = (lessonName, lessonId) => {
        let courseService = CourseService.getInstance();

        this.state.selectedModule.lessons.find(function (element) {
            return element.id === lessonId;
        }).title = lessonName;

        courseService.updateCourse(this.props.course.id, this.props.course);
        this.props.updateCourses();
    };

    editTopic = (topicName, topicId) => {
        let courseService = CourseService.getInstance();

        this.state.selectedLesson.topics.find(function (element) {
            return element.id === topicId;
        }).title = topicName;

        courseService.updateCourse(this.props.course.id, this.props.course);
        this.props.updateCourses();
    };

    render () {
        return (
            <div>
                <CourseEditorNavbar course={this.props.course}/>
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-3">
                            <ModuleList modules={this.props.course.modules}
                                        selectModule={this.selectModule}
                                        selectedModule={this.state.selectedModule}
                                        deleteModule={this.props.deleteModule}
                                        createModule={this.props.addModule}
                                        editModule={this.editModule}/></div>
                        <div className="col-9">
                            <LessonTabs lessons={this.state.selectedModule.lessons}
                                        selectLesson={this.selectLesson}
                                        selectedLesson={this.state.selectedLesson}
                                        deleteLesson={this.deleteLesson}
                                        createLesson={this.createLesson}
                                        editLesson={this.editLesson}/>
                            <TopicPills topics={this.state.selectedLesson.topics}
                                        selectTopic={this.selectTopic}
                                        selectedTopic={this.state.selectedTopic}
                                        deleteTopic={this.deleteTopic}
                                        createTopic={this.createTopic}
                                        editTopic={this.editTopic}/>
                             <br/>
                             <Provider store={store}>
                                 <WidgetListContainer/>
                             </Provider>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}