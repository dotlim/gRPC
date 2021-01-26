import client from './client';
import { EchoRequest } from './proto/echo_pb';

export function echo(message) {
  const request = new EchoRequest();
  request.setMessage(message);
  request.se
  return client.invoke('echo', request);
}
