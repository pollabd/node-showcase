
FROM node:18 

ADD package.json /tmp/package.json

RUN rm -rf build

RUN cd /tmp && npm install

ADD ./ /src

RUN rm -rf src/node_modules && cp -a /tmp/node_modules /src/

WORKDIR /src

RUN npm run build

CMD ["node", "build/src/app.js"]