# Lab 03 - Persistent Todo API

A TypeScript REST API with PostgreSQL, Docker Compose, and CI/CD pipeline.

## Stack
- Node.js + TypeScript
- Express
- PostgreSQL 15
- Docker + Docker Compose
- GitHub Actions

## Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | /todos | Get all todos |
| POST | /todos | Create a todo |
| PUT | /todos/:id | Update a todo |
| DELETE | /todos/:id | Delete a todo |

## Run Locally

1. Create `.env` file:
\```
DB_HOST=db
DB_USER=user
DB_PASSWORD=password
DB_NAME=mydb
\```

2. Start containers:
\`\`\`bash
docker compose up --build
\`\`\`

3. Test:
\`\`\`bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"my first todo"}'
\`\`\`

## Data Persistence
PostgreSQL data is stored in a named Docker volume `postgres-data` — survives container restarts.

## CI/CD
Pipeline triggers on changes to `lab-03/**` and:
- Builds Docker image
- Starts app + database with Docker Compose
- Tests all 4 endpoints
- Cleans up