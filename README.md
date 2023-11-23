# Referral Builder

This is the referral builder app, built as a monolithic monorepo using Yarn workspaces.

The backend is built with ExpressJS, practicing the repository pattern.

A shared Prisma DB adapter is used to connect to a Postgres DB. It was made as a dedicated package to share types across all packages.

The frontend is built with NextJS, based from the [recommendation of the React team to use frameworks for new projects](https://react.dev/learn/start-a-new-react-project).

## Installation

### Requirements

- [Docker](https://docs.docker.com/install/)
- Make
- [Yarn](https://yarnpkg.com/lang/en/docs/install)

### Setting up environment variables

Grant full execution permissions to `setup.sh` and run it:

```bash
$ chmod +x setup.sh
$ make setup-init
```

Then, install all NPM dependencies by running the following on the monorepo root:

```bash
$ yarn
```

## Running the app locally

Run the following commands in separate terminal instances:

```bash
$ yarn workspace backend dev
```

```bash
$ yarn workspace frontend dev
```
