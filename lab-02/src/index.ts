import express from 'express';
import { Pool } from 'pg';

const app = express();
const PORT = 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`Hello from TypeScript! DB time: ${result.rows[0].now}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});