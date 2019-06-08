import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";

export default class CourseEditorNavbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <div className="collapse navbar-collapse" id="collapseNavbar">
                    <div className="navbar-header">
                        <a className="navbar-brand">
                            <div className="text-white">
                                {this.props.course.title}
                            </div>
                        </a>
                    </div>
                    <div className="nav navbar text-white">
                        <Link className='navbar-item'
                              to="/course/table">
                            <div className="text-white">
                                Course Table
                            </div>
                        </Link>
                    </div>
                    <div className="nav navbar text-white">
                        <Link className='navbar-item'
                              to="/course/grid">
                            <div className="text-white">
                                Course Grid
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}
