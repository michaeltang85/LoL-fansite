FROM node:12.18.3

# Create app directory
WORKDIR /usr/src/app/client

#Copy package.json & package-lock.json
COPY package.json ./
COPY package-lock.json ./




#Install Dependencies
RUN npm install

#Copy React Files
ADD . ./

# Port Number for Image
EXPOSE 3000

# Commands
CMD [ "npm", "start" ]