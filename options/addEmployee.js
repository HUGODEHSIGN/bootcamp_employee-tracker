import pool from '../server.js';
import inquirer from 'inquirer';
export default async function addEmployee() {
  try {
    const { rows: roles } = await pool.query(`SELECT id, title FROM role;`);

    const { rows: managers } = await pool.query(
      `SELECT id, CONCAT(first_name, ' ', last_name) AS name
          FROM employee;`
    );

    const rolesArray = roles.map(({ title }) => title);
    const managersArray = managers.map(({ name }) => name);

    const { first, last, role, manager } = await inquirer.prompt([
      {
        type: 'input',
        name: 'first',
        message: "What is the employee's first name?",
      },
      {
        type: 'input',
        name: 'last',
        message: "What is the employee's last name?",
      },
      {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: rolesArray,
      },
      {
        type: 'list',
        name: 'manager',
        message: "Who is the employee's manager?",
        choices: managersArray,
      },
    ]);

    const roleId = roles.filter(({ title }) => title === role)[0].id;
    const managerId = managers.filter(({ name }) => name === manager)[0].id;

    pool.query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ($1, $2, $3, $4)`,
      [first, last, roleId, managerId],
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Added ${first} ${last} to the database`);
      }
    );
  } catch (err) {
    console.error(err);
  }
}
