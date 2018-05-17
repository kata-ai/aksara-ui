# kata-kit

> UI Kit for React from Kata.ai

[![NPM](https://img.shields.io/npm/v/kata-kit.svg)](https://www.npmjs.com/package/kata-kit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save kata-kit
```

## Usage

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
