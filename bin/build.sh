#!/bin/bash

rm -rf build

# create build dir 
mkdir -p build/assets/icons build/css build/js

# compress svg icons
echo "compressing icons:"
svgo -f ./src/assets/icons -o ./build/assets/icons

sleep 1
# uglify css & js
uglifycss "./src/css/styles.css" > ./build/css/styles.css
echo ""

echo "✅  styles minified"
echo ""

sleep 1
cp -R ./src/fonts ./build/
echo "✅  font copied"
echo ""

sleep 1
uglifyjs "./src/js/main.js" > ./build/js/main.js
echo "✅  js minified"
echo ""

sleep 1
# copy index to build 
cp ./src/index.html ./build
echo "✅  html document copied"
echo ""

sleep 1
echo "🥳  all done"
