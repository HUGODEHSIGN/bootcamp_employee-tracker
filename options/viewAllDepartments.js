import pool from '../server.js';

export default function viewAllDepartments() {
  pool.query(`SELECT * FROM department;`, (err, { rows }) => {
    console.table(rows);
  });
}
