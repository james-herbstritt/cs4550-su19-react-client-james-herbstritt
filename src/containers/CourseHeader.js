import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <tr>
                <th>Title</th>
                <th>Owned by</th>
                <th>Last modified</th>
                <th>
                    <button className="btn"
                            type="button">
                        <i className="fa fa-th"></i>
                    </button>
                </th>
            </tr>
        )
    }
}