import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseRow from '../containers/CourseRow';

export default class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
                <CourseRow/>
        )
    }
}