# You should listen to

> Randomly recommends an album from Metacritic's top rated list and pulls in information from the iTunes API.

A little experiment to learn React. Built with JSPM, React, ES6 and gaffer taped together with shell scripts and some old-school web-scraping.

[yslt.davidrapson.co.uk](http://yslt.davidrapson.co.uk/)

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

Update data feed

``` sh
npm run update
```

## Deployment

Deployment is handled via [surge](https://surge.sh/)

``` sh
npm run deploy
```

## Run in dev mode

``` js
<script src="jspm_packages/system.js"></script>
<script src="config.js"></script>
<script>System.import('lib/main.jsx!');</script>
```
