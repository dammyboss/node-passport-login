FROM node:13-alpine
WORKDIR opt/src/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5002
CMD ["npm", "start"]
