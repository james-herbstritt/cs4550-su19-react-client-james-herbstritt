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
import LessonService from "../services/LessonService";
import TopicService from "../services/TopicService";
import ModuleService from "../services/ModuleService";

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

    createModule = moduleName => {
        this.props.addModule(moduleName);
    };

    deleteModule = id => {
        let lessonService = LessonService.getInstance();
        let topicService = TopicService.getInstance();

        let lessl = this.state.selectedModule.lessons.length;

        for(let l = lessl; l > 0; l--) {
            let topsl = this.state.selectedModule.lessons[lessl - 1].topics.length;
            for(let t = topsl; t > 0; t--) {
                console.log("removing topic",t, "of lesson ", l);
                if(t !== 1) {
                    topicService.deleteTopic(this.state.selectedModule.lessons[l - 1].topics[t - 1].id);
                }
                else {
                    if(l !== 1) {
                        console.log("removing lesson", l);
                        topicService.deleteTopic(this.state.selectedModule.lessons[l - 1].topics[t - 1].id)
                            .then(() => lessonService.deleteLesson(this.state.selectedModule.lessons[l - 1].id));
                    }
                    else {
                        console.log("removing lesson", l);
                        topicService.deleteTopic(this.state.selectedModule.lessons[l - 1].topics[t - 1].id)
                            .then(() => lessonService.deleteLesson(this.state.selectedModule.lessons[l - 1].id))
                            .then( () => {
                                console.log("deleting module", id);
                                this.props.deleteModule(id)
                                    .then(() => this.props.updateCourses());
                                }
                            );
                    }
                }
            }
        }
    };

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
        let lessonService = LessonService.getInstance();
        let topicService = TopicService.getInstance();

        let topic =  {title: "Default Topic"};
        if(lessonName === "") {
            lessonName = "Default Lesson";
        }
        let lesson = {title: lessonName};

         lessonService.createLessonForModule(lesson, this.state.selectedModule.id)
            .then(response => response[response.length - 1])
            .then(response => topicService.createTopicForLesson(topic, response.id))
            .then(response => this.props.updateCourses())
    };

    deleteLesson = id => {
        let lessonService = LessonService.getInstance();
        let topicService = TopicService.getInstance();

        let topsl = this.state.selectedLesson.topics.length;

       for(let t = topsl; t > 0; t--) {
           if(t !== 1) {
               topicService.deleteTopic(this.state.selectedLesson.topics[t - 1].id);
           }
           else {
               topicService.deleteTopic(this.state.selectedLesson.topics[t - 1].id).then( () =>
                   lessonService.deleteLesson(id).then(() => this.props.updateCourses())
               )
           }
        }

        this.state.selectedModule.lessons = this.state.selectedModule.lessons.filter(lesson => lesson.id !== id);


    };

    createTopic = topicName => {
        let topicService = TopicService.getInstance();

        let topic = {title: topicName};

        topicService.createTopicForLesson(topic, this.state.selectedLesson.id)
            .then(response => this.props.updateCourses());
    };

    deleteTopic = id => {
        let topicService = TopicService.getInstance();

        this.state.selectedLesson.topics = this.state.selectedLesson.topics.filter(topic => topic.id !== id);

        topicService.deleteTopic(id).then(() => this.props.updateCourses());
    };

    findCourseById = id =>
        this.courses.find(function (element) {
            return element.id === id;
        });

    editModule = (moduleName, moduleId) => {
        let moduleService = ModuleService.getInstance();

        this.props.course.modules.find(function (element){
            return element.id === moduleId;
        }).title = moduleName;

        let module = {title : moduleName};

        moduleService.updateModuleForCourse(module, this.props.course.id, moduleId)
            .then(() => this.props.updateCourses())
    };

    editLesson = (lessonName, lessonId) => {
        let lessonService = LessonService.getInstance();

        this.state.selectedModule.lessons.find(function (element) {
            return element.id === lessonId;
        }).title = lessonName;

        let lesson = {title: lessonName};

        lessonService.updateLessonForModule(lesson, this.state.selectedModule.id, lessonId)
            .then(() => this.props.updateCourses());
    };

    editTopicForLesson = (topicName, topicId) => {
        let topicService = TopicService.getInstance();

        this.state.selectedLesson.topics.find(function (element) {
            return element.id === topicId;
        }).title = topicName;

        console.log("updating topic", topicId, "with new name", topicName);

        let topic = {title: topicName};
        topicService.updateTopicForLesson(topic, this.state.selectedLesson.id, topicId)
            .then(() => this.props.updateCourses());
    };

    render () {
        return (
            <div>
                <CourseEditorNavbar course={this.props.course}/>
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-3">
                            {console.log("course",this.props.course)}
                            {console.log("modules",this.props.course.modules)}
                             <ModuleList modules={this.props.course.modules}
                                        selectModule={this.selectModule}
                                        selectedModule={this.state.selectedModule}
                                        deleteModule={this.deleteModule}
                                        createModule={this.createModule}
                                        editModule={this.editModule}/>
                                        </div>
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
                                        editTopic={this.editTopicForLesson}/>
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