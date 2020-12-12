FROM node:12
    
WORKDIR /backend/

COPY package*.json ./
COPY .env ./

RUN npm install

COPY . .

EXPOSE 3100

CMD [ "npm", "run", "dev" ]
