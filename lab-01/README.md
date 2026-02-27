# Lab 01 - Dockerized Express App

A simple Node.js Express app containerized with Docker and CI/CD pipeline.

## Stack
- Node.js
- Express
- Docker
- GitHub Actions

## Run Locally

1. Build the image:
\```bash
docker build -t lab-01 .
\```

2. Run the container:
\```bash
docker run -p 3000:3000 lab-01
\```

3. Open browser at `http://localhost:3000`

## CI/CD
Pipeline triggers on changes to `lab-01/**` and:
- Builds Docker image
- Runs container
- Tests with curl
- Cleans up