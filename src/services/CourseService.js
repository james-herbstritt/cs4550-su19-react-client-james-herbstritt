export default class CourseService {
    static myInstance = null;
    static localUrl = "http://localhost:8080/api/courses/";
    static herokuUrl = "https://cs4550-su19-james-herbstritt.herokuapp.com/api/courses/";
    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance = new CourseService();
        }
        return this.myInstance;
    }

    createCourse = course =>
        fetch(CourseService.herokuUrl, {
            method: "post",
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        });

    findAllCourses = () => {
        console.log("Finding courses");
        return fetch(CourseService.herokuUrl)
            .then(response => response.json());
    };

    findCourseById = courseId =>
        fetch(CourseService.herokuUrl + courseId)
            .then(response => response.json());


    deleteCourse = courseId =>
        fetch(CourseService.herokuUrl + courseId, {
            method: "delete",
            headers: {
                "content-type": "application/json"
            }
        });

    updateCourse = (courseId, newCourse) => {
        return fetch(CourseService.herokuUrl + courseId, {
            method: "put",
            body: JSON.stringify(newCourse),
            headers: {
                "content-type": "application/json"
            }
        })};
}