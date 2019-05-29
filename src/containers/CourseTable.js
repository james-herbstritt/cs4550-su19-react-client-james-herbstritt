import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseRow from '../containers/CourseRow';
import CourseTableHeader from "./CourseTableHeader";

const CourseTable = ({courses, deleteCourse}) =>
    <div className="table-responsive">
        <table className="table active table-hover">
            <thead>
            <CourseTableHeader/>
            </thead>
            <tbody>
            {courses.map((course, key) =>
                <CourseRow deleteRow={deleteCourse} course={course} key={key}/>)}
            </tbody>
        </table>
    </div>;

export default CourseTable