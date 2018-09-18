# Contributing Guidelines

kata-kit is open source, so every component in kata-kit is developed by your help. You too can help contribute to this project! This page describes how to setup the project on your computer for local development.

This project is bound by a [Code of Conduct](CODE_OF_CONDUCT.md).

## The Five Golden Rules

The simple steps of contributing to any GitHub project are as follows:

1. [Fork the repository](https://github.com/kata-ai/kata-kit/fork)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push -u origin my-new-feature`
5. Create a [Pull Request](https://github.com/kata-ai/kata-kit/pulls)!

To keep your fork of in sync with this repository, [follow this guide](https://help.github.com/articles/syncing-a-fork/).

## Prerequisites

### Windows, macOS and Linux

- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org/) (8.0.0+)
- [Yarn](https://yarnpkg.com/)
- Text Editor with [EditorConfig](http://editorconfig.org/) & [Prettier](https://prettier.io/) support. (We recommend [Visual Studio Code](https://code.visualstudio.com/))

#### Prerequisite Check

Run these commands inside the Terminal (PowerShell/Command Prompt for Windows).

**Git:** You should see the version number:

```sh-session
$ git version
git version 2.18.0
```

**Node.js:** You should see the version number:

```sh-session
$ node -v
v8.11.4
```

**Yarn:** You should see the version number:

```sh-session
$ yarn -v
1.9.4
```

## Setting Up

First, you should clone the repository.

```sh-session
$ git clone https://github.com/kata-ai/kata-kit.git
```

After these repository has been cloned, `cd` into the repository:

```sh-session
$ cd kata-kit
```

Install the project's dependencies. Note that we use Yarn, not npm:

```sh-session
$ yarn
```

## Developing

The kata-kit website (located on the `website/` folder) also serves as a development environment for our components. Run the following command to start it locally:

```sh-session
$ cd website
$ yarn dev
```
