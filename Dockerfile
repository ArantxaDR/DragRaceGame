FROM node:14.17.0 as builder

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.13.3-alpine

COPY nginx/default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /dist   /usr/share/nginx/html 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]