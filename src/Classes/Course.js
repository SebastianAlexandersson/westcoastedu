const Course = function(params) {
  const {
    id,
    students,
    teacher,
    startDate,
    endDate,
  } = params;

  this.id = id || '1234';
  this.students = students || [];
  this.teacher = teacher || 'Default Teacher';
  this.startDate = startDate;
  this.endDate = endDate;
}

Course.prototype.addStudent = function(student) {
  this.students.push(student);
  console.log('Students: ', this.students)
}

Course.prototype.removeStudent = function(student) {
  const i = this.students.indexOf(student);

  if (i === -1) {
    return console.log('Student not found');
  }

  this.students = [...this.students.slice(0, i), ...this.students.slice(i + 1)];
  console.log('Students: ', this.students);
}

module.exports = Course;
