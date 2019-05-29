import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseCard from './CourseCard';
import CourseGridHeader from "./CourseGridHeader";

const CourseGrid = ({courses, deleteCourse}) =>
    <div>
        <CourseGridHeader/>
        <div className="container">
            <div className="row">
                { courses.map((course, key) => <CourseCard deleteCard={deleteCourse} course={course} key={key}/>)}
            </div>
        </div>
    </div>;

export default CourseGrid