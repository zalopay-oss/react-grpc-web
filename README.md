# React gRPC-Web

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![version](https://img.shields.io/badge/contributors-1-blueviolet) [![version](https://img.shields.io/badge/open%20issues-0-red)](https://github.com/ozuit/react-grpc-web/issues)

This is a demo for using gRPC-Web with the React app. This application is built on top of **create-react-app** and wrapped by [ReactRPC](https://www.npmjs.com/package/reactrpc).

## Image for running app

![Generator Web](./demo.png)

## Get Started

### Prerequisites

- You need to install [Docker](https://www.docker.com/get-started) in order to run the Envoy Proxy.
- You also need to install Node Js to run the server.

### Installing

- Clone this repo from **[https://github.com/ozuit/react-grpc-web.git](https://github.com/ozuit/react-grpc-web.git)**
- Installing dependencies with *Yarn*

```bash
yarn install
```

### Usage

- Start web server

```bash
yarn start
```

- Or you can build to the static web by run command following

```bash
yarn build
```

- Start node server

```bash
node server.js
```

Start envoy proxy

```bash
docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro \
    -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.15.0
```

## Document

Get more information at [wiki](https://github.com/ozuit/react-grpc-web/wiki)

## Support

- If you have any problems with Web Generators don't hesitate to make an [issue](https://github.com/ozuit/react-grpc-web/issues)
- Feel free to folk and submit pull requests
- You can try to modify **helloworld.proto** file then run following command and copy two files are generated to **src/rpc**
  
```bash
protoc -I=. helloworld.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
```

## Authors

- Tan Tong
