import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";

export default class CourseGridHeader extends React.Component {
    render () {
        return (
            <div className="row p-2 align-text-bottom font-weight-bold align-items-center">
                <div className="col-6">
                    Recent Documents
                </div>
                <div className="col-2">
                    <div className="dropdown">
                        <button className="btn font-weight-bold bg-white dropdown-toggle"
                                type="button"
                                aria-haspopup="true"
                                aria-expanded="false">
                        Owned By
                        </button>
                    </div>
                </div>
                <div className="col-4 text-right">
                    <button className="btn">
                        <i className="fa fa-sort"></i>
                    </button>
                    <button className="btn">
                        <i className="fa fa-folder"></i>
                    </button>
                    <Link className='btn'
                          to="/course/table">
                        <i className="fa fa-bars"></i>
                    </Link>
                </div>
            </div>
        )
    }
}