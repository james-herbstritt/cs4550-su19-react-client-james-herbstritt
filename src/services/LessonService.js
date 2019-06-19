export default class LessonService {
    static myInstance = null;
    static localUrl = "http://localhost:8080/api/lessons/";
    static herokuUrl = "https://cs4550-su19-james-herbstritt.herokuapp.com/api/lessons/";

    static getInstance() {
        if (LessonService.myInstance == null) {
            LessonService.myInstance = new LessonService();
        }
        return this.myInstance;
    }

    createLesson = lesson =>
        fetch(LessonService.herokuUrl, {
            method: "post",
            body: JSON.stringify(lesson),
            headers: {
                "content-type": "application/json"
            }
        });

    createLessonForModule = (lesson, moduleId) =>
        fetch(`https://cs4550-su19-james-herbstritt.herokuapp.com/api/modules/${moduleId}/lessons`, {
            method: "post",
            body: JSON.stringify(lesson),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json());

    findAllLessons = () => {
        let lessons = fetch(LessonService.herokuUrl)
            .then(response => response.json());

        return lessons;
    };

    findLessonById = lessonId =>
        fetch(LessonService.herokuUrl + lessonId)
            .then(response => response.json());


    deleteLesson = lessonId =>
        fetch(LessonService.herokuUrl + lessonId, {
            method: "delete",
            headers: {
                "content-type": "application/json"
            }
        });

    updateLesson = (lessonId, newLesson) => {
        return fetch(LessonService.herokuUrl + lessonId, {
            method: "put",
            body: JSON.stringify(newLesson),
            headers: {
                "content-type": "application/json"
            }
        })
    };

    updateLessonForModule = (newlesson, moduleId, lessonId) => {
        return fetch(`https://cs4550-su19-james-herbstritt.herokuapp.com/api/modules/${moduleId}/lessons/${lessonId}`, {
            method: "put",
            body: JSON.stringify(newlesson),
            headers: {
                "content-type": "application/json"
            }
        });
    };
}