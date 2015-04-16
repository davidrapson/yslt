# You should listen to

> Randomly recommends an album from Metacritic's top rated list and pulls in information from the iTunes API.

A little experiment to learn React. Built with JSPM, React, ES6 and gaffer taped together with shell scripts and some old-school web-scraping.

[davidrapson.github.io/yslt](http://davidrapson.github.io/yslt/)

## Getting Started

``` sh
npm install -g jspm
npm install
jspm install
npm start
```

## Build

``` sh
./build.sh
```

## Deployment

Deployment is handled via [surge](https://surge.sh/)

``` sh
./scripts/build
surge
```

## Run in dev mode

``` js
<script src="JSXTransformer.js"></script>
<script src="jspm_packages/system.js"></script>
<script src="config.js"></script>
<script>
    System.import('lib/main.jsx!');
</script>
```
