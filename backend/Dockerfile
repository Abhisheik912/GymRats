FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN ./node_modules/.bin/nest build
CMD ["node", "dist/main.js"]
