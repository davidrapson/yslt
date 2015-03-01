# You should listen to

> A little experiment to learn React. Randomly recommends an album from Metacritic's top rated list and pulls in information from the iTunes API.

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

## Data from the following YQL query

`https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20data.html.cssselect%20WHERE%20url%3D%27http%3A%2F%2Fwww.metacritic.com%2Fbrowse%2Falbums%2Fscore%2Fmetascore%2Fyear%3Fyear_selected%3D2015%27%20AND%20css%3D%27.product_row%27%20limit%2050&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`
