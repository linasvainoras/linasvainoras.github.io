#!/bin/bash
npm run build:prod
git add bundle.js
git commit -m "build"
git push