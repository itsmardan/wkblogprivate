#!/bin/bash
echo "Building Hugo Site"
rm -rf public
hugo --minify
echo "Build Complete"
