import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <i className="fa fa-users mr-3" aria-hidden="true"></i>
                    <Link to={`/course/edit/${this.props.course.id}`}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td>
                    Me
                </td>
                <td>
                    May something
                </td>
                <td>
                    <span className="float-right">
                        <button className="btn bg-danger wbdv-delete"
                                type="button">
                            <i className="fa fa-times-circle"></i>
                        </button>
                    </span>
                </td>
            </tr>
        )
    }
}