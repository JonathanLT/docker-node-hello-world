FROM node:lts-alpine3.19

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node
COPY --chown=node:node . .

EXPOSE 3000
CMD [ "node", "server.mjs" ]
