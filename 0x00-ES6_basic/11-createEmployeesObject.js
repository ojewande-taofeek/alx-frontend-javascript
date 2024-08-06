export default function createEmployeesObject(departmentName, employees) {
    const val = {
        [`${departmentName}`]: employees,
    };
    return val;
}
