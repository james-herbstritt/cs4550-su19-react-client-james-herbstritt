import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';
import TopicPills from './TopicPills';

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

    render () {
        return (
            <div className="container-fluid">
                <div className="row col-4 text-right">
                    <h2>{this.props.course.title}</h2>
                </div>
                <div className="row">
                    <div className="col-2">
                        <ModuleList modules={this.props.course.modules}
                                    selectModule={this.selectModule}
                                    selectedModule={this.state.selectedModule}/></div>
                    <div className="col-10">
                        <LessonTabs lessons={this.state.selectedModule.lessons}
                                    selectLesson={this.selectLesson}
                                    selectedLesson={this.state.selectedLesson}/>
                        <TopicPills topics={this.state.selectedLesson.topics}
                                    selectTopic={this.selectTopic}
                                    selectedTopic={this.state.selectedTopic}/>
                    </div>
                </div>
            </div>

        )
    }
}