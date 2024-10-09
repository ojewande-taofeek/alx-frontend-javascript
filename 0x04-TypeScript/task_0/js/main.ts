interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Taofeek',
    lastName: 'Ojewande',
    age: 33,
    location: 'Kazaure',
};

const student2: Student = {
    firstName: 'Tariq',
    lastName: 'Ojewande',
    age: 1,
    location: 'Abuja',
}



const studentsList = [student1, student2];

document.body.onload= addTable;

function addTable(): void {
  const table = document.createElement('table');
  for (const student of studentsList) {
    const row = document.createElement('tr');
    const column1 = document.createElement('td');
    column1.innerHTML = student.firstName;
    row.appendChild(column1);
    const column2 = document.createElement('td');
    column2.innerHTML = student.location;
    row.appendChild(column2);
    table.appendChild(row);
  }
  document.body.appendChild(table);
}
