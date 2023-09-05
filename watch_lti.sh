#!/bin/bash
npm run jalan

while inotifywait -e modify /home/lti/lti-tools-js/server/src/app/lti.js; do
    npm run jalan
done
