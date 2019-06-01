import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';
import TopicPills from './TopicPills';
import CourseEditorNavbar from "./CourseEditorNabvbar";
import CourseService from "../services/CourseService";

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

    }

    deleteLesson = id => {
        let courseService = CourseService.getInstance();

        this.state.selectedModule.lessons = this.state.selectedModule.lessons.filter(lesson => lesson.id !== id);

        let newCourse = {
            id: this.props.course.id,
            title: this.props.course.title,
            modules: this.props.course.modules
        };
        courseService.updateCourse(this.props.course.id, newCourse);
        this.setState({courses: courseService.findAllCourses()});
        //this.selectModule(this.state.selectedModule);
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
                                        createModule={this.props.addModule}/></div>
                        <div className="col-9">
                            <LessonTabs lessons={this.state.selectedModule.lessons}
                                        selectLesson={this.selectLesson}
                                        selectedLesson={this.state.selectedLesson}
                                        deleteLesson={this.deleteLesson}/>
                            <TopicPills topics={this.state.selectedLesson.topics}
                                        selectTopic={this.selectTopic}
                                        selectedTopic={this.state.selectedTopic}/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}