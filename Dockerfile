FROM node:20
WORKDIR /app
ENV PORT=8080
COPY . .
RUN npm install --force
EXPOSE 8080
CMD [ "npm","run","start-dev"]