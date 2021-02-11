FROM node:12.16.1-alpine As builder

WORKDIR /usr/src/app

COPY *.json ./

RUN npm install

COPY . .

RUN npm run prod

FROM nginx:1.15.8-alpine

# COPY nginx.config /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/dist/angular-demo/ /usr/share/nginx/html