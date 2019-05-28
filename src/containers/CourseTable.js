import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseRow from '../containers/CourseRow';
import CourseTableHeader from "./CourseTableHeader";

export default class CourseTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div className="table-responsive">
                <table className="table active table-hover">
                    <thead>
                        <CourseTableHeader/>
                    </thead>
                    <tbody>
                        { this.props.courses.map((course, key) => <CourseRow course={course}key={key}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}