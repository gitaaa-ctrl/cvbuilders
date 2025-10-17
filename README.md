# CV Builder

A Next.js app to create and preview a personal CV.
Built with Next.js (App Router), TypeScript, MongoDB (Mongoose), and Zod.

## Run Locally

1. Create a file named `.env.local` in the project root:

```
MONGODB_URI=mongodb://localhost:27017/cv_alt
```

2. Install dependencies:

```
npm ci
```

3. Start the app:

```
npm run dev
```

Then open http://localhost:3000

- `/builder` → fill in your CV details
- `/preview` → view your CV

## Run with Docker

```
docker-compose up --build
```

MongoDB will run inside Docker, and the app will be available at:
http://localhost:3000

## Tech Stack

- Next.js 14 (App Router + Server Actions)
- TypeScript
- MongoDB + Mongoose
- Zod (validation)
- Vitest (testing)
- Docker + GitLab CI/CD

## Folder Structure

```
app/
 ├─ (app)/builder/
 ├─ (app)/preview/
 ├─ layout.tsx
 ├─ page.tsx
components/
lib/
models/
schemas/
tests/
```

## Test

```
npm run test
```

## License

MIT
