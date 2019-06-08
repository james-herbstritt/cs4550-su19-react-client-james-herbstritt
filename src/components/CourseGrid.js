import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CourseCard from './CourseCard';
import CourseGridHeader from "./CourseGridHeader";
import CourseNavbar from "./CourseNavbar";

const CourseGrid = ({courses, deleteCourse, selectCourse, addCourse}) =>
    <div>
        <CourseNavbar addCourse={addCourse}/>
        <CourseGridHeader/>
        <div className="container">
            <div className="row">
                { courses.map((course, key) => <CourseCard deleteCard={deleteCourse}
                                                           course={course}
                                                           key={key}
                                                           selectCourse={selectCourse}/>)}
            </div>
        </div>
    </div>;

export default CourseGrid;