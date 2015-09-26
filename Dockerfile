FROM node:0.10-onbuild
EXPOSE 8888
RUN mkdir /app
ADD package.json /app/package.json
WORKDIR /app
RUN npm install
CMD ["node", "server.js"]