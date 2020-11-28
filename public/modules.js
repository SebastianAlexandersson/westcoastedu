export const courses = (function() {
  //Private state
  let courseList = [];

  function addCourse(course) {
    courseList.push(course);
  }

  function deleteCourse(id) {
    courseList = courseList.filter((course) => course.id !== id);
  }

  function getAllCourses() {
    return courseList;
  }

  function addStudentToCourse(student, course) {
    const theCourse = courseList.find((c) => c.id === course.id);

    theCourse.students.push(student);
    student.courses.push(course);
  }

  function addTeacherToCourse(teacher, course) {
    const theCourse = courseList.find((c) => c.id === course.id);

    theCourse.teacher = teacher;
  }
  //Public API
  return {
    addCourse,
    deleteCourse,
    getAllCourses,
    addStudentToCourse,
    addTeacherToCourse,
  }
})();

export const students = (function() {
  //Private state
  let studentList = [];

  function addStudent(student) {
    studentList.push(student);
  }

  function deleteStudent(id) {
    studentList = studentList.filter((student) => student.id !== id);
  }

  function getAllStudents() {
    return studentList;
  }
  //Public API
  return {
    addStudent,
    deleteStudent,
    getAllStudents,
  }
})();

export const teachers = (function() {
  //Private state
  let teacherList = [];

  function addTeacher(teacher) {
    teacherList.push(teacher);
  }

  function deleteTeacher(id) {
    teacherList = teacherList.filter((teacher) => teacher.id !== id);
  }

  function getAllTeachers() {
    return teacherList;
  }
  //Public API
  return {
    addTeacher,
    deleteTeacher,
    getAllTeachers,
  }
})();

//DATA
export const javascript = {
  id: 1,
  subject: 'Javascript',
  teacher: null,
  students: [],
}

export const teacher = {
  id: 1,
  name: 'John Doe',
  courses: [],
}

export const student = {
  id: 1,
  name: 'Pelle',
  courses: [],
}

export const student2 = {
  id: 2,
  name: 'Adam',
  courses: [],
}
