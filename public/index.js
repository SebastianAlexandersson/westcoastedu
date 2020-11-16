class Course {
  constructor(id, subject, students, teacher) {
    this.id = id;
    this.subject = subject;
    this.students = students;
    this.teacher = teacher;

    this.teacher.courses.push(this);
    this.students.forEach((student) => {
      student.courses.push(this);
    })
  }

  addStudent(student) {
    this.students.push(student);
    student.courses.push(this);
  }

  removeStudent(student) {
    this.students = this.students.filter((s) => s.id !== student.id);
    student.courses = student.course.filter((c) => c.id !== this.id);
  }
}

class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Teacher extends Person {
  constructor(id, name, courses) {
    super(id, name);
    this.courses = courses;
  }
}

class Administrator extends Person {
  constructor(id, name, title) {
    super(id, name);
    this.title = title;
  }
}

class Student extends Person {
  constructor(id, name, courses) {
    super(id, name);
    this.courses = courses;
  }
}
const Pelle = new Student(1, 'Pelle', []);
const Adam = new Student(2, 'Adam', []);
const Bertil = new Student(3, 'Bertil', []);
const Johan = new Student(4, 'Johan', []);

const Bengt = new Teacher(1, 'Bertil', []);
const Anna = new Teacher(2, 'Anna', []);

const Javascript = new Course(1, 'Javascript', [Pelle], Bengt);
const Typescript = new Course(2, 'Typescript', [Johan], Anna);

const courses = {
  javascript: Javascript,
  typescript: Typescript,
}

const students = {
  pelle: Pelle,
  adam: Adam,
  bertil: Bertil,
  johan: Johan,
}

const selector = document.querySelector('#courses');
const courseData = document.querySelector('#courseData');
const studentsSelector = document.querySelector('#students');
const studentsSelectorLabel = document.querySelector('#studentsLabel');

let selectedCourse = null;

selector.addEventListener('change', (e) => {
  const course = courses[e.target.value];
  selectedCourse = course || null;

  if (course) {
    studentsSelector.className = '';
    studentsSelectorLabel.className = '';
    courseData.innerHTML = `
      <pre>
        Course: ${course.subject}
        Teacher: ${course.teacher.name}
        <span id="studentList">Students: ${course.students.map((student) => student.name).join(', ')}</span>
      </pre>
    `;
  } else {
    studentsSelector.className = 'hidden';
    studentsSelectorLabel.className = 'hidden';
    courseData.innerHTML = '';
  }
})

studentsSelector.addEventListener('change', (e) => {
  const student = students[e.target.value];

  if (student) {
    selectedCourse.addStudent(student)
    document.querySelector('#studentList')
      .innerText = 'Students: '
      + selectedCourse.students.map((student) => student.name).join(', ');
  }
})
