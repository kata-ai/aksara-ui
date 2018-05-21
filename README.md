# kata-kit

> UI Kit for React from Kata.ai

[![NPM](https://img.shields.io/npm/v/kata-kit.svg)](https://www.npmjs.com/package/kata-kit) [![Build Status](https://travis-ci.org/kata-ai/kata-kit.svg?branch=master)](https://travis-ci.org/kata-ai/kata-kit)

## Install

```bash
npm install --save kata-kit
```

## Usage

first import css file in your entry files

```
import 'kata-kit/dist/style.css';
```

then you can use kata-kit component from other files

```jsx
import React, { Component } from 'react'

import { Banner } from 'kata-kit'

class Example extends Component {
  render () {
    return (
      <Banner state="success" message="Hallo" />
      <Banner state="info" message="Hallo" />
    )
  }
}
```

## Development

First, you need to run `npm link` on this root folder.

```
npm link # this will create global symlink on your machine
```

Second, you'll run rollup to watch your `src/` module and automatically recompile it into dist/ whenever you make changes.

```
npm start # runs rollup with watch flag
```

Third, go to your desired project and then run `npm link kata-kit`

```
cd /path/to/your/project
npm link kata-kit # kata-kit package will be placed in your project's node_modules
```

## Publish

This package is using [semver versioning](https://semver.org/). To publish an update, you need to install [this publishing package](https://github.com/sindresorhus/np) to make your life easier. Please read the documentation thoroughly.

## License

MIT © [kata-ai](https://github.com/kata-ai)
