FROM node:18

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci --only=production
COPY . .

EXPOSE 1337
CMD [ "npx", "tsx", "src/index.ts"]