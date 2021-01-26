import { EchoServiceClient } from './proto/echo_grpc_web_pb';
import GrpcWebClient from '../index';

const baseUrl = `localhost:8080`;

export default new GrpcWebClient(EchoServiceClient, baseUrl);
