import React from 'react';
import  {Link} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
/*
export default class CourseCard extends React.Component {
    render () {
        return (
            <div className="card mr-3" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>

                <div className="card-body">
                    <h5 className="card-title">{this.props.course.title}</h5>
                    <p className="card-text">Last Modified: 14 May 2019</p>
                    <Link className="btn btn-success btn-block"
                          to={`/course/edit/${this.props.course.id}`}>
                        Edit
                    </Link>
                        <button className="btn bg-danger wbdv-delete"
                                type="button"
                                onClick={() => deleteRow(course.id)}>
                            <i className="fa fa-times-circle"></i>
                        </button>
                </div>
            </div>
        )
    }
}
*/
const CourseCard = ({course, deleteCard}) =>
    <div className="card mr-3" styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>

        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">Last Modified: 14 May 2019</p>
            <Link className="btn btn-success btn-block"
                  to={`/course/edit/${course.id}`}>
                Edit
            </Link>
            <button className="btn bg-danger wbdv-delete btn-block"
                    type="button"
                    onClick={() => deleteCard(course.id)}>
                <i className="fa fa-times-circle"></i>
            </button>
        </div>
    </div>;



export default CourseCard;