FROM node:20-alpine AS builder
WORKDIR /app
ARG VITE_API_GRIST_URL
ARG VITE_API_GRIST_TOKEN
ENV VITE_API_GRIST_URL=${VITE_API_GRIST_URL}
ENV VITE_API_GRIST_TOKEN=${VITE_API_GRIST_TOKEN}
# ----------------------------
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# ----------------------------
FROM nginx:alpine
# Install envsubst for templating
RUN apk add --no-cache gettext
WORKDIR /etc/nginx
COPY nginx.conf.template /etc/nginx/nginx.conf.template
CMD envsubst '\
  $VITE_API_GRIST_URL \
  $VITE_API_GRIST_TOKEN \
  ' < /etc/nginx/nginx.conf.template \
  > /etc/nginx/nginx.conf \
  && nginx -g "daemon off;"
# Copy React build
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
