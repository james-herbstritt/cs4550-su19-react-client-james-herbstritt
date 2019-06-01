import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const TopicPills = ({topics, selectTopic, selectedTopic}) =>
    <ul className="nav nav-pills ">
        { topics.map((topic, key) =>
            <li className="nav-item"
                key={key}
                onClick={() => selectTopic(topic)}>
                <a href="#"
                    className={topic === selectedTopic ?
                    "nav-link active" :
                    "nav-link"}>
                    {topic.title}</a></li>)}
    </ul>;

export default TopicPills;