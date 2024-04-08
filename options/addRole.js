import pool from '../server.js';
import inquirer from 'inquirer';

export default async function addRole() {
  try {
    const { rows: departments } = await pool.query(`SELECT * FROM department`);
    const departmentsArray = departments.map(({ name }) => name);

    const { title, salary, department } = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of the role?',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?',
      },
      {
        type: 'list',
        name: 'department',
        message: 'Which department does the role belong to?',
        choices: departmentsArray,
      },
    ]);

    const departmentId = departments.filter(
      ({ name }) => name === department
    )[0].id;

    pool.query(
      `INSERT INTO role (title, salary, department) VALUES
    ($1, $2, $3);`,
      [title, salary, departmentId],
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Added ${title} to the database`);
      }
    );
  } catch (err) {
    console.error(err);
  }
}
