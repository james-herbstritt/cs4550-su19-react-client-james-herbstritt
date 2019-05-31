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

    findCourseById = id => 
        this.courses.find(function (element) {
            return element.id === id;
        });

    deleteCourse = id => {
        this.courses = this.courses.filter(course => course.id !== id);
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