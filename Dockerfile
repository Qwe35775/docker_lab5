FROM node:alpine

WORKDIR /app

COPY index.js .

RUN npm install express

ARG VERSION
ENV VERSION=${VERSION}

EXPOSE 3000

CMD ["node", "index.js"]
