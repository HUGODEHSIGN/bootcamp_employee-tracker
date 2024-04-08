import pool from '../server.js';
import inquirer from 'inquirer';

export default async function addDepartment() {
  try {
    const { department } = await inquirer.prompt([
      {
        type: 'input',
        name: 'department',
        message: 'What is the name of the department?',
      },
    ]);
    pool.query(
      `INSERT INTO department (name) VALUES
    ($1)`,
      [department],
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Added ${department} to the database`);
      }
    );
  } catch (err) {
    console.error(err);
  }
}
