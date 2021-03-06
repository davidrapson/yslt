# You should listen to

> Randomly recommends an album from Metacritic's top rated list and pulls in information from the iTunes API.

A little experiment to learn React. Built with JSPM, React, ES6. Backed by [YSLT API](https://github.com/davidrapson/yslt-api)

## Getting Started

``` sh
npm install
jspm install
npm start
```

## Available Tasks

Start BrowserSync server

``` sh
npm start
```

Run a build

``` sh
npm run build
```

Watch files for changes

``` sh
npm run watch
```

## Run in dev mode

Either run `npm run watch` to run a build on file changes or replace:

``` html
<script src="build/app.min.js" async></script>
```

with

``` html
<script src="jspm_packages/system.js"></script>
<script src="config.js"></script>
<script>System.import('lib/main');</script>
```
