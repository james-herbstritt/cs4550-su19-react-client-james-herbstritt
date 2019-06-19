export default class TopicService {
    static myInstance = null;
    static localUrl = "http://localhost:8080/api/topics/";
    static herokuUrl = "https://cs4550-su19-james-herbstritt.herokuapp.com/api/topics/";
    static getInstance() {
        if (TopicService.myInstance == null) {
            TopicService.myInstance = new TopicService();
        }
        return this.myInstance;
    }

    createTopic = topic =>
        fetch(TopicService.herokuUrl, {
            method: "post",
            body: JSON.stringify(topic),
            headers: {
                "content-type": "application/json"
            }
        });


    createTopicForLesson = (topic, lessonId) =>
        fetch(`https://cs4550-su19-james-herbstritt.herokuapp.com/api/lessons/${lessonId}/topics`, {
            method: "post",
            body: JSON.stringify(topic),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json());


    findAllTopics = () => {
        let topics = fetch(TopicService.herokuUrl)
            .then(response => response.json());

        return topics;
    };

    findTopicById = topicId =>
        fetch(TopicService.herokuUrl + topicId)
            .then(response => response.json());


    deleteTopic = topicId =>
        fetch(TopicService.herokuUrl + topicId, {
            method: "delete",
            headers: {
                "content-type": "application/json"
            }
        });

    updateTopic = (topicId, newTopic) => {
        return fetch(TopicService.herokuUrl + topicId, {
            method: "put",
            body: JSON.stringify(newTopic),
            headers: {
                "content-type": "application/json"
            }
        })};

    updateTopicForLesson = (newTopic, lessonId, topicId) => {
        return fetch(`https://cs4550-su19-james-herbstritt.herokuapp.com/api/lessons/${lessonId}/topics/${topicId}`, {
            method: "put",
            body: JSON.stringify(newTopic),
            headers: {
                "content-type": "application/json"
            }
    });
    }
}