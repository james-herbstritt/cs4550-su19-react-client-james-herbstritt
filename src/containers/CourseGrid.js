import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseCard from './CourseCard';
import CourseGridHeader from "./CourseGridHeader";


export default class CourseGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div>
                <CourseGridHeader/>
                <div className="col-8">
                    <div className="card-deck container-fluid w-50">
                        { this.props.courses.map((course, key) => <CourseCard course={course} key={key}/>)}
                    </div>
                </div>
            </div>
        )
    }
}