function CourseService() {
    this.createCourse = createCourse;
    this.findAllCourses = findAllCourses;
    this.findCourseById = findCourseById;
    this.updateCourse = updateCourse;
    this.deleteCourse = deleteCourse;
    this.url = 'http://localhost:3000/api/users/';
    const self = this;

    function createCourse(course) {
        course.id = (new Date()).getTime();
        return fetch(this.url, {
            method: "post",
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        });
    }

    function findAllCourses() {
        return fetch(this.url)
            .then((value) => {
                return value.json();
            });
    }

    function findCourseById(id) {
        return fetch(this.url + id)
            .then((value) => {
                return value.json();
            });
    }

    function updateCourse(id, course) {
        return fetch(this.url + id, {
            method: post,
                body: JSON.stringify(course),
                headers: {
                "content-type": "application/json"
            }
        });
    }

    function deleteCourse(id) {
        return fetch(this.url + id, {
            method: "delete",
            headers: {
                "content-type": "application/json"
            }
        });
    }
}