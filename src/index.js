const Course = require('./Classes/Course');

const javascript = new Course({
  id: 1,
  students: ['Pelle', 'Kalle', 'Adam'],
  teacher: 'John Smith',
  startDate: new Date(Date.now()),
  endDate: new Date(Date.now() + (3600000 * 60 * 24 * 7)),
})

console.log(javascript);

javascript.addStudent('John Doe');
javascript.removeStudent('Brad Pitt');
javascript.removeStudent('Pelle');
