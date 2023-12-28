# Remix Railway Template

Bare bones template for deploying a Remix app via Railway.
[Learn more about Remix Templates](https://remix.run/docs/en/main/guides/templates)

## What's in the template?

- [Railway app deployment](https://docs.railway.app/guides/dockerfiles) with [Docker](https://www.docker.com/)
- [Github Autodeploys](https://docs.railway.app/guides/github-autodeploys) with Railway
- [Healthcheck endpoint](/app/routes/health-check.tsx) for postgres db
- Database ORM with [Prisma](https://prisma.io)
- Styling with [Tailwind](https://tailwindcss.com/)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)

## Setup options

1. Clone via create-remix cli:

   ```sh
   npx create-remix@latest --template remix-run/blues-stack my-app --package-manager pnpm
   ```

2. You can also clone this repository directly, and run the `remix.init` script manually.

   ```sh
   # clone repo
   git clone https://github.com/ryanmichaelhirst/remix-railway my-app
   cd my-app
   # run remix init
   npx remix init
   git add .
   git commit -m "Initialize project"
   ```

## Development

- Install all dependencies

  ```sh
  pnpm install
  ```

  > **Note:** Replace `pnpm` with your package manager i.e. `npm`, `yarn`, etc

- Start the Postgres Database in [Docker](https://www.docker.com/get-started)

  ```sh
  pnpm docker
  ```

  > **Note:** The pnpm script will complete while Docker sets up the container in the background. Ensure that Docker has finished and your container is running before proceeding.

- Initial setup

  ```sh
  pnpm run setup
  ```

  > **Note:** This will generate the prisma client, apply db migrations and seed your local postgres db

- Run the first build

  ```sh
  pnpm build
  ```

- Start dev server

  ```sh
  pnpm dev
  ```

  > **Note:** This starts your app in development mode, rebuilding assets on file changes.

### Relevant code:

This is a bare bones repo with a single database model called `Example`. `1,000` records will be created in the `Example` table after running `pnpm run setup`. You can replace this schema with your own in `/prisma/schema.prisma`. Make sure you update the prisma seed script as well under `/prisma/seed.ts`.

## Deployment

Production deployments are done via [Railway](https://railway.app/), a platform that will handle all the CI/CD operations for you. Railway will look for a `/Dockerfile` to build the app. [Learn more about Railway Dockerfiles](https://docs.railway.app/guides/dockerfiles).

Prior to your first deployment, you'll need to do the following:

- [Create Railway Account](https://railway.app/new)

  > **Note:** Creating an account via Github is recommended.

- Click `New Project` on Railway to house your app

- Click `Deploy from GitHub repo` and select this repo to create a service for your web app

- Click `+ New` -> `Database` -> `Add PostgreSQL` to create a service for your postgres db

- After both services have been created, create an env variable `DATABASE_URL` in your app service using the db credentials for your postgres service

## CI / CD

Railway will automatically deploy any commits that are made to the `main` branch. You can also [Configure the GitHub branch for deployment triggers](https://docs.railway.app/guides/github-autodeploys#configure-the-github-branch-for-deployment-triggers).

## Testing

No testing framework is added via this template.

### Type Checking

This project uses TypeScript. To run type checking across the whole project, run `pnpm typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

[Prettier](https://prettier.io/) handles all auto-formatting. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. To format all files manually run `pnpm format`.
