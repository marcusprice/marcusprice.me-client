#!/bin/bash

# create build dir 
mkdir -p build/assets
# compress svg icons
svgo -f ./src/assets -o ./build/assets
# copy index to build 
cp ./src/index.html ./build
