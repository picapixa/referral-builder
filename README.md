# Installation

## Requirements

- [Docker](https://docs.docker.com/install/)
- Make
- [Yarn](https://yarnpkg.com/lang/en/docs/install)

## Setting up environment variables

Grant full execution permissions to `setup.sh` and run it:

```bash
$ chmod +x setup.sh
$ make setup-init
```

Then, install all NPM dependencies by running the following on the monorepo root:

```bash
$ yarn
```
