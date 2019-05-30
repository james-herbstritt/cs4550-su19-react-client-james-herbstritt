import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const LessonTabs = ({lessons, selectLesson, selectedLesson}) =>
    <ul className="nav nav-tabs">
        { lessons.map((lesson, key) =>
        <li className="nav-item"
            key={key}
            onClick={() => selectLesson(lesson)}>
            <a className={lesson===selectedLesson ?
                "nav-link active":
                "nav-link"}>
                {lesson.title}</a></li>)}
    </ul>;

export default LessonTabs;