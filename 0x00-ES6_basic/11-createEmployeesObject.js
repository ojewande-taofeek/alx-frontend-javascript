const createEmployeesObject = ((departmentName, employees) => {
  const department = {
    [`${departmentName}`]: [...employees],
  };
  return department;
});

export default createEmployeesObject;
