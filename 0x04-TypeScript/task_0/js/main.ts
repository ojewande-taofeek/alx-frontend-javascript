interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

const student1: Student = {
    firstName: 'Abiodun',
    lastName: 'Hussein',
    age: 34,
    location: 'Kano'
};

const student2: Student = {
    firstName: 'Lara',
    lastName: 'Raji',
    age: 32,
    location: 'Abuja'
};

const studentList = [student1, student2];

document.body.onload = addTable;

function addTable(): void {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.innerHTML = 'First Name';
    tr.appendChild(th1);
    const th2 = document.createElement('th');
    th2.innerHTML = 'Location';
    tr.appendChild(th2);
    thead.appendChild(tr);
    table.appendChild(thead);

    for (const std of studentList) {
        const row = document.createElement('tr');
        const col1 = document.createElement('td');
        col1.innerHTML = std.firstName;
        row.appendChild(col1);
        const col2 = document.createElement('td');
        col2.innerHTML = std.location;
        row.appendChild(col2);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);

    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';

    const cells = Array.from(table.getElementsByTagName('th'));

    for (const cell of cells) {
        cell.style.border = '1px solid black';
        cell.style.padding = '8px';
    }

    const bCells = Array.from(table.getElementsByTagName('td'));

    for (const bCell of bCells) {
        bCell.style.border = '1px solid black';
        bCell.style.padding = '8px';
    }
}
