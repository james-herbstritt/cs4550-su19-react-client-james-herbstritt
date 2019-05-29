import courses from '../db/courses.json'
export default class CourseService {
    static myInstance = null;
    courses = courses;

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance = new CourseService();
        }
        return this.myInstance;
    }

    createCourse = course => this.courses.push(course);


    findAllCourses = () => this.courses;

    findCourseById = id => {
        for (var c in this.courses) {
            if (this.courses[c].id === id) {
                return this.courses[c];
            }
        }
    };

    deleteCourse = id => {
        this.courses = this.courses.filter(course => course.id !== id);
        console.log("courses after", this.courses)

    };

    updateCourse(id, course) {
        for (var c in this.courses) {
            if (this.courses[c].id === id) {
                this.courses[c] = course;
                this.courses[c].id = id;
            }
        }
    };
}