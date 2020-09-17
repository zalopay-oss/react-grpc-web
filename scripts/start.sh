#!/bin/bash

# Start backend
cd ./backend
docker rmi Image app_backend
docker build -t app_backend .
docker run --rm -d -v ${PWD}:/usr/src/app -p 9090:9090 --name app_backend app_backend

# Start envoy proxy
cd ../frontend
docker run --rm -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro -p 8080:8080 -p 9901:9901 --name envoy-proxy envoyproxy/envoy:v1.15.0

# Start application
docker rmi Image app_frontend
docker build -t app_frontend .
docker run --rm -d -v ${PWD}:/usr/src/app -p 3000:3000 --name app_frontend app_frontend