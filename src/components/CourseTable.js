import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import CourseRow from './CourseRow';
import CourseTableHeader from "./CourseTableHeader";
import CourseNavbar from "./CourseNavbar"

const CourseTable = ({courses, deleteCourse, selectCourse, addCourse}) =>
    <div>
        <CourseNavbar addCourse={addCourse}/>
        <div className="table-responsive">
            <table className="table active table-hover">
                <thead>
                <CourseTableHeader/>
                </thead>
                <tbody>
                {courses.map((course, key) =>
                    <CourseRow deleteCourse={deleteCourse}
                               course={course}
                               key={key}
                               selectCourse={selectCourse}/>)}
                </tbody>
            </table>
        </div>
    </div>;

export default CourseTable