#set the base Image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app
#COPY package*.json ./
COPY . .

RUN npm ci --only=production

CMD [ "npx", "tsx", "src/index.ts"]
#CMD [ "npx", "run", "start"]