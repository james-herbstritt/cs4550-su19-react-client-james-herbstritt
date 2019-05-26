import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseList from '../containers/CourseList';
import CourseHeader from '../containers/CourseHeader'

export default class CourseTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div className="table-responsive">
                <table className="table table-hover active bg-light">
                    <thead>
                        <CourseHeader/>
                    </thead>
                    <tbody>
                        <CourseList/>
                    </tbody>
                </table>
            </div>
        )
    }
}