# You should listen to

> Randomly recommends an album from Metacritic's top rated list and pulls in information from the iTunes API.

A little experiment to learn React. Built with JSPM, React, ES6 and gaffer taped together with shell scripts and some old-school web-scraping.

[davidrapson.github.io/yslt](http://davidrapson.github.io/yslt/)

## Getting Started

``` sh
npm install 
jspm install
npm start
```

## Available Tasks

### Build
``` sh
npm run build
```

### Update data feed
``` sh
npm run update
```

### Watch files for changes
``` sh
npm run watch
```

### Start BrowserSync server
``` sh
npm start
```

## Deployment

Deployment is handled via [surge](https://surge.sh/)

``` sh
npm run deploy
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
