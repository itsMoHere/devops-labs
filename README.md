# Lab 02 - TypeScript App + PostgreSQL

A TypeScript Express app connected to a PostgreSQL database using Docker Compose.

## Stack
- Node.js + TypeScript
- Express
- PostgreSQL 15
- Docker + Docker Compose
- GitHub Actions

## Run Locally

1. Create `.env` file:
\```
DB_HOST=db
DB_USER=user
DB_PASSWORD=password
DB_NAME=mydb
\```

2. Start containers:
\```bash
docker compose up --build
\```

3. Open browser at `http://localhost:3000`

## CI/CD
Pipeline triggers on changes to `lab-02/**` and:
- Builds Docker image with Docker Compose
- Tests app is running with curl
- Cleans up