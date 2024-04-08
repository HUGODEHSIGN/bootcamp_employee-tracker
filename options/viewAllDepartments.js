import pool, { mainMenu } from '../server.js';

export default function viewAllDepartments() {
  pool.query(`SELECT * FROM department;`, (err, { rows }) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(rows);
  });
  mainMenu();
}
