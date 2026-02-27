# DevOps Labs

A collection of hands-on DevOps labs built while learning DevOps engineering.
Each lab covers real-world concepts with working code, Docker, and CI/CD pipelines.

## Structure

Each lab lives in its own folder with:
- Full source code
- Dockerfile
- Docker Compose file (where applicable)
- CI/CD pipeline
- README explaining what was built and learned

## Topics Covered

- Docker — Dockerfiles, images, containers, layer caching
- Docker Compose — multi-container apps, networking, volumes
- PostgreSQL — connecting apps to databases
- CI/CD — GitHub Actions pipelines
- GitHub Secrets — secure credential management
- TypeScript — building and compiling inside Docker

## Running Any Lab

1. Navigate to the lab folder
2. Create a `.env` file (see lab README for required variables)
3. Run:
\```bash
docker compose up --build
\```

## Labs
See each lab's README for details on what was built and how to run it.