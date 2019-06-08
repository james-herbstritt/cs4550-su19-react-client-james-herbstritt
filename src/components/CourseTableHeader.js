import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";

export default class CourseTableHeader extends React.Component {
    render() {
        return (
            <tr>
                <th>Title</th>
                <th>
                    <div className="dropdown">
                        <button className="btn font-weight-bold dropdown-toggle"
                                type="button"
                                aria-haspopup="true"
                                aria-expanded="false">
                            Owned By
                        </button>
                    </div>
                </th>
                <th>Last modified</th>
                <th className="text-right">
                    <Link className="btn"
                        to="/course/grid">
                        <i className="fa fa-th"></i>
                    </Link>
                </th>
            </tr>
        )
    }
}