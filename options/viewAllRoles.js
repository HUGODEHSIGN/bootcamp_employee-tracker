import pool from '../server.js';

export default function viewAllRoles() {
  pool.query(
    `SELECT role.id, role.title, department.name AS department_name, role.salary
    FROM role
    JOIN department ON role.department = department.id;`,
    (err, { rows }) => {
      console.table(rows);
    }
  );
}
