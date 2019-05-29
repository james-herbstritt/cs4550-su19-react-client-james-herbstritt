import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseCard from './CourseCard';
import CourseGridHeader from "./CourseGridHeader";

/*
export default class CourseGrid extends React.Component {
    render () {
        return (
            <div>
                <CourseGridHeader/>
                    <div className="card-group container">
                        { this.props.courses.map((course, key) => <CourseCard course={course} key={key}/>)}
                    </div>
            </div>
        )
    }
}
*/

const CourseGrid = ({courses, deleteCourse}) =>
    <div>
        <CourseGridHeader/>
        <div className="card-group container">
            { courses.map((course, key) => <CourseCard deleteCard={deleteCourse} course={course} key={key}/>)}
        </div>
    </div>;

export default CourseGrid