import pool, { mainMenu } from '../server.js';
import inquirer from 'inquirer';
export default async function updateEmployeeRole() {
  try {
    const { rows: employees } =
      await pool.query(`SELECT id, CONCAT(first_name, ' ', last_name) AS name
          FROM employee;`);
    const { rows: roles } = await pool.query(`SELECT id, title FROM role;`);

    const employeesArray = employees.map(({ name }) => name);
    const rolesArray = roles.map(({ title }) => title);

    const { employee, role } = await inquirer.prompt([
      {
        type: 'list',
        name: 'employee',
        message: "What is the employee's role?",
        choices: employeesArray,
      },
      {
        type: 'list',
        name: 'role',
        message: "Who is the employee's manager?",
        choices: rolesArray,
      },
    ]);

    const employeeId = employees.filter(({ name }) => name === employee)[0].id;
    const roleId = roles.filter(({ title }) => title === role)[0].id;

    pool.query(
      `UPDATE employee
    SET role_id = $1
    WHERE id = $2;`,
      [roleId, employeeId],
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Updated employee's role");
      }
    );

    mainMenu();
  } catch (err) {
    console.error(err);
  }
}
