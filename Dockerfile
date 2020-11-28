FROM node:12.18.3

# Create app directory

WORKDIR /usr/src/app

# Copy both package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./
# install dependencies
RUN npm install

# COPY nodejs files

COPY . ./

#Port number for image
EXPOSE 5000

#Commands
CMD [ "npm", "run", "server"]