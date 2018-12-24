#!/bin/bash

echo "Start deploy"
cd ~/joy/server-im09-prj-joy
# server
git checkout develop
git pull origin develop
npm i
# client
cd client
git checkout develop
git pull origin develop
npm run build
cd ..
# server
pm2 stop 0
pm2 start npm -- start
echo "Deploy end"
