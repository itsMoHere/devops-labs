import express, { Request, Response } from 'express';
import { Pool } from 'pg';

const app = express();
app.use(express.json());
const PORT = 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Create table if not exists
pool.query(`
  CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    done BOOLEAN DEFAULT false
  )
`);

// GET all todos
app.get('/todos', async (req: Request, res: Response) => {
  const result = await pool.query('SELECT * FROM todos');
  res.json(result.rows);
});

// POST create todo
app.post('/todos', async (req: Request, res: Response) => {
  const { title } = req.body;
  const result = await pool.query(
    'INSERT INTO todos (title) VALUES ($1) RETURNING *',
    [title]
  );
  res.status(201).json(result.rows[0]);
});

// PUT update todo
app.put('/todos/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { done } = req.body;
  const result = await pool.query(
    'UPDATE todos SET done=$1 WHERE id=$2 RETURNING *',
    [done, id]
  );
  res.json(result.rows[0]);
});

// DELETE todo
app.delete('/todos/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query('DELETE FROM todos WHERE id=$1', [id]);
  res.json({ message: 'deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});