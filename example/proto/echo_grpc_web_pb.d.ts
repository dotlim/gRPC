import * as grpcWeb from 'grpc-web';

import * as echo_pb from './echo_pb';


export class EchoServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  echo(
    request: echo_pb.EchoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: echo_pb.EchoResponse) => void
  ): grpcWeb.ClientReadableStream<echo_pb.EchoResponse>;

  echoAbort(
    request: echo_pb.EchoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: echo_pb.EchoResponse) => void
  ): grpcWeb.ClientReadableStream<echo_pb.EchoResponse>;

  noOp(
    request: echo_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: echo_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<echo_pb.Empty>;

  serverStreamingEcho(
    request: echo_pb.ServerStreamingEchoRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<echo_pb.ServerStreamingEchoResponse>;

  serverStreamingEchoAbort(
    request: echo_pb.ServerStreamingEchoRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<echo_pb.ServerStreamingEchoResponse>;

}

export class EchoServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  echo(
    request: echo_pb.EchoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<echo_pb.EchoResponse>;

  echoAbort(
    request: echo_pb.EchoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<echo_pb.EchoResponse>;

  noOp(
    request: echo_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<echo_pb.Empty>;

  serverStreamingEcho(
    request: echo_pb.ServerStreamingEchoRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<echo_pb.ServerStreamingEchoResponse>;

  serverStreamingEchoAbort(
    request: echo_pb.ServerStreamingEchoRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<echo_pb.ServerStreamingEchoResponse>;

}

