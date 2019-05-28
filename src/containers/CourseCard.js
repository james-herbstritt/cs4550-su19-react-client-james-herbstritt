import React from 'react';
import  {Link} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseCard extends React.Component {
    render () {
        return (
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>

                <div className="card-body">
                    <h5 className="card-title">{this.props.course.title}</h5>
                    <p className="card-text">Card Text</p>
                    <Link className="btn btn-primary"
                          to={`/course/edit/${this.props.course.id}`}>
                        More...
                    </Link>
                </div>
            </div>
        )
    }
}
