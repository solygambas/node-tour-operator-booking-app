FROM node:18-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

# CMD ["node", "app.js"]
CMD ["npm", "run", "dev"]