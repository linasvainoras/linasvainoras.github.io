#!/bin/bash
webpack -p
git add bundle.js
git commit -m "build"
git push