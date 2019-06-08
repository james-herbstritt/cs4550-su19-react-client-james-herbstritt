import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonName: ""
        }
    }

    lessonNameChange = event =>  this.setState({lessonName: event.target.value});

    createLesson = () => this.props.createLesson(this.state.lessonName);

    render() {
        return (
            <ul className="nav nav-tabs">
                { this.props.lessons.map((lesson, key) =>
                    <li className="nav-item"
                        key={key}
                        onClick={() => this.props.selectLesson(lesson)}>
                        <a href="#"
                           className={lesson === this.props.selectedLesson ?
                               "nav-link active":
                               "nav-link"}>
                            {lesson.title}
                            <span className="float-right mb-1">
            <button className="btn-sm bg-success ml-3 mr-1"
                    type="button"
                    onClick={() => this.props.editLesson(this.state.lessonName, lesson.id)}>
                <i className="fa fa-pencil"></i>
            </button>
            <button className="btn-sm bg-danger"
                    type="button"
                    onClick={() => this.props.deleteLesson(lesson.id)}>
                <i className="fa fa-times-circle"></i>
            </button>
        </span></a>
                    </li>)}
                <li>
                    <input className="nav-item form-control bg-light"
                           placeholder="lesson"
                           onChange={this.lessonNameChange}
                           value={this.state.lessonName}/>
                </li>
                <li>
                    <button className="btn btn-primary btn-block ml-1"
                            onClick={this.createLesson}>
                        <i className="fa fa-plus-circle"></i>
                    </button>
                </li>
            </ul>
        )
    }
}