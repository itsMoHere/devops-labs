# Lab 04 - Multi-stage Docker Builds

Optimized production Docker image using multi-stage builds.

## What Changed from Lab 03
| | Lab 03 | Lab 04 |
|--|--------|--------|
| Image size | 322MB | 241MB |
| TypeScript in image | ✅ | ❌ |
| devDependencies | ✅ | ❌ |
| Source files | ✅ | ❌ |

## How it works
```
Stage 1 (builder) → install all deps → compile TypeScript
Stage 2 (production) → copy only dist/ → install prod deps only
```

## Run Locally
1. Create `.env` file (see lab-03 for variables)
2. Run:
```bash
docker compose up --build
```

## CI/CD
Pipeline triggers on `lab-04/**` changes, builds multi-stage image, tests all endpoints and prints final image size.