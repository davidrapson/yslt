# You should listen to

> Randomly recommends an album from Metacritic's top rated list and pulls in information from the iTunes API.

A little experiment to learn React. Built with JSPM, React, ES6 and gaffer taped together with shell scripts and some old-school web-scraping.

[yslt.davidrapson.co.uk](http://yslt.davidrapson.co.uk/)

![](https://circleci.com/gh/davidrapson/yslt.svg?circle-token=:cea3749e002a4f777b11dfd2ce03ac2aa55b3ff0)

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

## Run in dev mode

Either run `npm run watch` to run a build on file changes or replace:

``` html
<script src="build/app.js" async defer></script>
```

with

``` html
<script src="jspm_packages/system.js"></script>
<script src="config.js"></script>
<script>System.import('lib/main.jsx!');</script>
```
