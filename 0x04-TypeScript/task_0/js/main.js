var student1 = {
    firstName: 'Taofeek',
    lastName: 'Ojewande',
    age: 33,
    location: 'Kazaure',
};
var student2 = {
    firstName: 'Tariq',
    lastName: 'Ojewande',
    age: 1,
    location: 'Abuja',
};
var studentsList = [student1, student2];
function addTable() {
    var table = document.createElement('table');
    for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
        var student = studentsList_1[_i];
        var row = document.createElement('tr');
        var column1 = document.createElement('td');
        column1.innerHTML = student.firstName;
        row.appendChild(column1);
        var column2 = document.createElement('td');
        column2.innerHTML = student.location;
        row.appendChild(column2);
        table.appendChild(row);
    }
    document.body.appendChild(table);
}
document.body.onload = addTable;
