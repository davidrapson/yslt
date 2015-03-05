#!/bin/sh

jspm bundle-sfx --minify lib/main.jsx! build/app.js
./node_modules/csso/bin/csso -i css/style.css -o css/style.min.css