import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseNavbar extends React.Component {
    constructor(props) {
        super(props);
        //course header is gonna have a state dependent on the grid thing so that the
        //index can read it and then switch between cards and the table
        this.state = {};
    }
    render () {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="collapseNavbar">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                Course Manager
                            </a>
                        </div>
                    </div>

                    <div className="navbar-nav">
                        <div className="nav-item d-flex">
                            <input className="form-control mr-2 flex-shrink-1"
                                   type="text"
                                   placeholder="New Course Title"/>
                            <button className="btn btn-success flex-shrink-0">
                                Add Course
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}