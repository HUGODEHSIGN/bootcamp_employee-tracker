import pool from '../server.js';

export default function viewAllEmployees() {
  pool.query(
    `SELECT employee.id AS employee_id, employee.first_name, employee.last_name, 
    role.title AS role_title, role.salary, 
    department.name AS department_name,
    CASE 
        WHEN manager.id IS NOT NULL THEN CONCAT(manager.first_name, ' ', manager.last_name)
        ELSE NULL
    END AS manager
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department = department.id
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id;`,
    (err, { rows }) => {
      console.table(rows);
    }
  );
}
