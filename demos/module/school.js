var klass = require('./klass');
exports.add = function (klasses) {
    klasses.forEach(function (item, index) {
        klass.add(item.teacherName, item.students);
    })
};
