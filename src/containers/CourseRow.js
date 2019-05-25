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
            <div className="table-responsive">
                <table className="table table-hover active bg-light">
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
                    </tr>
                </table>
            </div>)
    }
}