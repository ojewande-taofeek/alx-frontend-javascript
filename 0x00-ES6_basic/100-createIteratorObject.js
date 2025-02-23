export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  const empList = [];
  for (const names of employees) {
    empList.push(...names);
  }
  return empList;
}
