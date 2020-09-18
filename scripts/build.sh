#!/bin/bash

export WORKING_DIR=$(pwd)

# Start backend
cd ./backend/protos
protoc -I=. helloworld.proto \
  --js_out=import_style=commonjs:$WORKING_DIR/frontend/src/grpc \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$WORKING_DIR/frontend/src/grpc
