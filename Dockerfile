FROM node:20-alpine AS builder
WORKDIR /app
# No secrets at build time: VITE_AES_KEY, VITE_API_GRIST_URL and VITE_API_GRIST_TOKEN
# are injected at container start (config.js + nginx template).
# ----------------------------
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# ----------------------------
FROM nginx:alpine
# Install envsubst for templating
RUN apk add --no-cache gettext

# WORKDIR /etc/nginx
# COPY nginx.conf.template /etc/nginx/nginx.conf.template
# CMD envsubst '\
#   $VITE_API_GRIST_URL \
#   $VITE_API_GRIST_TOKEN \
#   $VITE_AES_KEY \
#   ' < /etc/nginx/nginx.conf.template \
#   > /etc/nginx/nginx.conf \
#   && nginx -g "daemon off;"

# Copy React build
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx template -> sera transformé automatiquement au démarrage
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Runtime frontend config template
COPY config.js.template /opt/config.js.template

# Custom entrypoint for envsubst in config.js
COPY 40-generate-config.sh /docker-entrypoint.d/40-generate-config.sh
RUN chmod +x /docker-entrypoint.d/40-generate-config.sh

EXPOSE 80