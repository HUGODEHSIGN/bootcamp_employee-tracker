import viewAllEmployees from './options/viewAllEmployees.js';
import addEmployee from './options/addEmployee.js';
import updateEmployeeRole from './options/updateEmployeeRole.js';
import viewAllRoles from './options/viewAllRoles.js';
import addRole from './options/addRole.js';
import viewAllDepartments from './options/viewAllDepartments.js';
import addDepartment from './options/addDepartment.js';
import quit from './options/quit.js';

const optionsLookup = {
  'View All Employees': viewAllEmployees,
  'Add Employee': addEmployee,
  'Update Employee Role': updateEmployeeRole,
  'View All Roles': viewAllRoles,
  'Add Role': addRole,
  'View All Departments': viewAllDepartments,
  'Add Department': addDepartment,
  Quit: quit,
};

export default optionsLookup;
