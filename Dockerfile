FROM node:14-alpine

RUN mkdir -p /home/server

WORKDIR /home/server

COPY package.json /home/server

RUN npm install

COPY . /home/server

EXPOSE 4000

CMD ["npm","run", "dev"]