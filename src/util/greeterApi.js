import { GreeterClient } from '../rpc/helloworld_grpc_web_pb.js';
import { HelloRequest, RepeatHelloRequest } from '../rpc/helloworld_pb.js';

const URL = "http://" + window.location.hostname + ":8080";
const client = new GreeterClient(URL, null, null);

const metadata = { 'custom-header-1': 'value1' };

export default {
  sayHello: (name, callback) => {
    const request = new HelloRequest();
    request.setName(name);
    client.sayHello(request, metadata, callback);
  },
  sayRepeatHello: ({ name, count }) => {
    const streamRequest = new RepeatHelloRequest();
    streamRequest.setName(name);
    streamRequest.setCount(count);
    return client.sayRepeatHello(streamRequest, metadata);
  },
};
