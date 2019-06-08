import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseName: ""
        }
    }

    courseNameChange = event =>  this.setState({courseName: event.target.value});

    render () {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <div className="collapse navbar-collapse" id="collapseNavbar">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/course/table">
                            Course Manager
                        </a>
                    </div>
                </div>
                <div className="navbar-nav">
                    <div className="nav-item d-flex">
                        <input className="form-control mr-2 flex-shrink-1"
                               type="text"
                               onChange={this.courseNameChange}
                               value={this.state.courseName}
                               placeholder="New Course Title"/>
                        <button className="btn btn-success flex-shrink-0"
                                onClick={() => this.props.addCourse(this.state.courseName)}>
                            Add Course
                        </button>
                    </div>
                </div>
            </nav>
        )
    }
}