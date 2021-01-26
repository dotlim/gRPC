import { Empty } from 'google-protobuf/google/protobuf/empty_pb.js';

class GrpcWebClient {
  constructor(ServiceClient, baseUrl) {
    this.baseUrl = baseUrl;
    this.client = new ServiceClient(baseUrl, null, null);
  }

  invoke(method, request = new Empty()) {
    const client = this.client;

    return new Promise((resolve, reject) => {
      if (!Reflect.has(client, method)) {
        throw new ReferenceError(`${method} is not defined`);
      }

      client[method](request, {}, (err, response) => {
        if (err) {
          return reject(err);
        }

        const result = response.toObject();

        if (result.errorid === 0) {
          resolve(result);
        } else {
          reject(result.reason);
        }
      });
    });
  }

  setBaseUrl(url) {
    this.baseUrl = url;
  }
}

export default GrpcWebClient;
