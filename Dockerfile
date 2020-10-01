FROM node:12-alpine

RUN mkdir /tcw
WORKDIR /tcw
COPY ./package.json /tcw
COPY ./yarn.lock /tcw
RUN yarn
CMD yarn start:dev
