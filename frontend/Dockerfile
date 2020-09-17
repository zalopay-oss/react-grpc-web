FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app
RUN npm install

# Copying source files
COPY . /usr/src/app

EXPOSE 3000
# Running the app
CMD ["npm", "start"]