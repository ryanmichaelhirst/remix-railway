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
   npx create-remix@latest --template https://github.com/ryanmichaelhirst/remix-railway my-app --package-manager pnpm
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

## Stripe

Payments are powered through Stripe and recorded through a webhook at `/app/routes/stripe.event`

> **Note:** Because of a [bug in linuxbrew](https://github.com/stripe/stripe-cli/issues/645), Windows users will need to use Cloudflare Tunnels or a similar alternative to test stripe webhooks locally.

For Mac Users, install the Stripe CLI [here](https://docs.stripe.com/stripe-cli#install), and forward events to your local webhook during testing with

```
stripe listen --forward-to localhost:3000/stripe/event
```

Read more about stripe testing [here](https://docs.stripe.com/webhooks#test-webhook)

Use card details `4242 4242 4242 4242, 12/34, 123`

Alternatively, you can use Cloudflare Tunnels to receive webhooks events locally.

### Cloudflare Tunnels

You can expose your localhost server (`pnpm dev`) as a publicaly routable IP address with ssh tunneling

Full instructions [here](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/local/#set-up-a-tunnel-locally-cli-setup)

Install with homebrew

```
brew install cloudflared
```

Login using cli

```
cloudflared tunnel login
```

Create a tunnel

```
cloudflared tunnel create <NAME>
```

Update config file with your creds

```
cp cloudflare.yaml.sample cloudflare.yaml
```

Route traffic to tunnel

```
cloudflared tunnel route dns <UUID or NAME> <hostname>
```

i.e

```
cloudflared tunnel route dns 71b2ae8b-6e25-4435-b6c0-1d80490552a1 dev.example.com
```

Expose the dev server

```
cloudflared tunnel run <UUID or NAME> // or
pnpm tunnel
```

If you are using cloudflare this has already been done for you.

If using a different domain registar you will need to follow the guide [here](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/routing-to-tunnel/dns/)

## Deployment

> **Note:** Before deploying your app, you will need to first create a postgres service on railway. https://docs.railway.app/guides/postgresql

### Railway UI

Production deployments are done via [Railway](https://railway.app/), a platform that will handle all the CI/CD operations for you. Railway will look for a `/Dockerfile` to build the app. [Learn more about Railway Dockerfiles](https://docs.railway.app/guides/dockerfiles).

Prior to your first deployment, you'll need to do the following:

- [Create Railway Account](https://railway.app/new)

  > **Note:** Creating an account via Github is recommended.

- Click `New Project` on Railway to house your app

- Click `+ New` -> `Database` -> `Add PostgreSQL` to create a service for your postgres db

  > **Note:** After the postgres service has been created, copy the value for `Variables` -> `DATABASE_URL`

- Click `Deploy from GitHub repo` and select this repo to create a service for your web app

- Create an env var `DATABASE_URL` using the copied value from the postgres service

<br />

> **Note:** You can also deploy manually on https://railway.app. You will still need to manually create an env var `DATABASE_URL`

### Railway CLI

- [Install cli](https://docs.railway.app/guides/cli#installing-the-cli)
- Authenticate via cli:
  ```sh
  railway login
  ```
- Create new project
  ```sh
  railway init
  ```
- Connect to new project
  ```sh
  railway link
  ```
- Deploy app
  ```sh
  railway up
  ```

## CI / CD

Railway will automatically deploy any commits that are made to the `main` branch. You can also [Configure the GitHub branch for deployment triggers](https://docs.railway.app/guides/github-autodeploys#configure-the-github-branch-for-deployment-triggers).

## Testing

No testing framework is added via this template.

### Type Checking

This project uses TypeScript. To run type checking across the whole project, run `pnpm typecheck`.

### Linting

This project uses ESLint for linting. You can customize in `.eslintrc.js`.

### Formatting

[Prettier](https://prettier.io/) handles all auto-formatting. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. To format all files manually run `pnpm format`.
