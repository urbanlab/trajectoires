#!/bin/sh
set -eu

envsubst '${VITE_AES_KEY} ${VITE_API_GRIST_URL} ${VITE_API_GRIST_TOKEN}' \
  < /opt/config.js.template \
  > /usr/share/nginx/html/config.js