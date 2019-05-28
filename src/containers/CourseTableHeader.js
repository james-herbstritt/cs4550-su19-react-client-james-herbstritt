import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";

export default class CourseTableHeader extends React.Component {
    render() {
        return (
            <tr>
                <th>Title</th>
                <th>Owned by</th>
                <th>Last modified</th>
                <th>

                    <Link className='btn'
                        to="/course/grid">
                        <i className="fa fa-th"></i>
                    </Link>
                </th>
            </tr>
        )
    }
}