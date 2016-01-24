var teacher = require('./teacher');
var student = require('./students');

var add = function (teacherName, students) {
    teacher.add(teacherName);
    students.forEach(function (item, index) {
        student.add(item, index);
    })
};
exports.add = add;