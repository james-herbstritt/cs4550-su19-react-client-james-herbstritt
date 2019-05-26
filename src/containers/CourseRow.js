import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <tr>
                <td>
                    <i className="fa fa-users" aria-hidden="true"></i>
                    CS5610 Web Development
                </td>
                <td>
                    Me
                </td>
                <td>
                    May 8 2019
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