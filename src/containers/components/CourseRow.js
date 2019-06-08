import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const CourseRow = ({course, deleteCourse, selectCourse}) =>
    <tr>
        <td>
            <i className="fa fa-users mr-3" aria-hidden="true"></i>
            <Link to={`/course/edit/${course.id}`}
                  onClick={() => selectCourse(course.id)}>
                {course.title}
            </Link>
        </td>
        <td>
            Me
        </td>
        <td>
            14 May 2019
        </td>
        <td>
            <span className="float-right">
                <button className="btn bg-danger wbdv-delete"
                        type="button"
                        onClick={() => deleteCourse(course.id)}>
                    <i className="fa fa-times-circle"></i>
                </button>
            </span>
        </td>
    </tr>;

export default CourseRow