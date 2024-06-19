FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_BACKEND_URL='http://localhost:3500'
ENV PORT='3777'
EXPOSE 3000
CMD ["npm", "start"]

LABEL authors="almon"