import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


export default class TopicPills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topicName: ""
        }
    }
    render() {
        return (
            <ul className="nav nav-pills mt-1">
                { this.props.topics.map((topic, key) =>
                    <li className="nav-item"
                        key={key}
                        onClick={() => this.props.selectTopic(topic)}>
                        <a href="#"
                           className={topic === this.props.selectedTopic ?
                               "nav-link active" :
                               "nav-link"}>
                            {topic.title}
                            <span className="float-right mb-1">
                                <button className="btn-sm bg-success ml-3 mr-1"
                                        type="button">
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button className="btn-sm bg-danger"
                                        type="button"
                                        onClick={() => this.props.deleteTopic(topic.id)}>
                                    <i className="fa fa-times-circle"></i>
                                </button>
                            </span>
                        </a>
                    </li>)}
                <li>
                    <input className="nav-item form-control bg-light"
                           placeholder="topic"
                           value={this.state.topicName}/>
                </li>
                <li>
                    <button className="btn btn-primary btn-block ml-1">
                        <i className="fa fa-plus-circle"></i>
                    </button>
                </li>
            </ul>
        )
    }
}