FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g typescript

COPY . .

RUN npm run build
RUN npm uninstall better-sqlite3 && npm install better-sqlite3@latest


ENV PORT=3000
EXPOSE 3000

CMD ["node", "dist/server.js"]
