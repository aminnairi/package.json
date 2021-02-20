# Contributing

## Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Watch

Build the `docs` folder and watch for changes in the `sources` folder.

```console
$ docker-compose run npm run watch
```

## Build

Build the `docs` folder.

```console
$ docker-compose run npm run build
```

## NPM

```console
$ docker-compose run npm COMMAND
```

*Where `COMMAND` is the [NPM](https://docs.npmjs.com/cli/v6/commands) command to run.*

## NPX

```console
$ docker-compose run npx COMMAND
```

*Where `COMMAND` is the [NPX](https://github.com/npm/npx#readme) command to run.*