FROM mhart/alpine-node:12

# Create app directory
RUN mkdir -p /src/app
WORKDIR /src/app

# to make npm test run only once non-interactively
ENV CI=true

# Install app dependencies
COPY package.json /src/app/
RUN npm install

# Bundle app source
COPY . /src/app

EXPOSE 3000

# defined in package.json
CMD [ "npm", "run", "start" ]