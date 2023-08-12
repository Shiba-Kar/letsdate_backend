FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
EXPOSE 3333
CMD ["npm", "start"]