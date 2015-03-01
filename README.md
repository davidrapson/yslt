# You should listen to

[davidrapson.github.io/yslt](http://davidrapson.github.io/yslt/)

> A little experiment to learn React. Randomly recommends an album from Metacritic's top rated list and pulls in information from the iTunes API.

## Prerequisites

You should have the following installed:

- `node`
- `wget` (for scraping YQL query data on build)

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

## Run in dev mode

``` js
<script src="JSXTransformer.js"></script>
<script src="jspm_packages/system.js"></script>
<script src="config.js"></script>
<script>
    System.import('lib/main.jsx!');
</script>
```
