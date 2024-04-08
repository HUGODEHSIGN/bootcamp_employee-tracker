import viewAllEmployees from './options/viewAllEmployees.js';
import addEmployee from './options/addEmployee.js';

function placeholder() {
  console.log('here');
}

const optionsLookup = {
  'View All Employees': viewAllEmployees,
  'Add Employee': addEmployee,
  'Update Employee Role': placeholder,
  'View All Roles': placeholder,
  'Add Role': placeholder,
  'View All Departments': placeholder,
  'Add Department': placeholder,
};

export default optionsLookup;
