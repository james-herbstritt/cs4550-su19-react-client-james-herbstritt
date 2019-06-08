import React from 'react';
import  {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

const CourseCard = ({course, deleteCard, selectCourse}) =>
    <div className="col-xl-2 col-md-4 col-6">
        <div className="card mr-3 mb-3 align-items-stretch w-100">
            <img className="card-img-top"
                 src="https://picsum.photos/300/200"/>

            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Last Modified: 14 May 2019</p>
                <Link className="btn btn-success btn-block"
                      to={`/course/edit/${course.id}`}
                      onClick={() => selectCourse(course.id)}>
                    Edit
                </Link>
                <button className="btn bg-danger text-white wbdv-delete btn-block"
                        type="button"
                        onClick={() => deleteCard(course.id)}>
                    Remove
                </button>
            </div>
        </div>
    </div>;

export default CourseCard;