#!/bin/sh
set -eu

envsubst '${VITE_AES_KEY}' \
  < /opt/config.js.template \
  > /usr/share/nginx/html/config.js