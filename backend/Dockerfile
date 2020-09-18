FROM mhart/alpine-node:12

ENV PORT 9090

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN yarn install --silent

# Copying source files
COPY . /usr/src/app

# Running the app
CMD "yarn" "start"