FROM node:20
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

ENV MONGO_URL=mongodb://root:example@mongo:27017/the_database?authSource=admin
ENV REDIS_URL=redis://redis:6379

RUN npm ci --omit=dev
  
USER node

CMD npm start