import express from 'express';
import pgk from 'pg';
const { Pool } = pgk;

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = new Pool(
  {
    user: 'postgres',
    password: '0819',
    host: 'localhost',
    database: 'employee_db',
  },
  console.log(`Connected to the employee_db database.`)
);

pool.connect();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3001/`);
});
