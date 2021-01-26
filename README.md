# @dotlim/grpc

> Asynchronous gRPC client.

## gPRC Usage

1. 安装依赖：

   ```bash
   npm install gRPC-Web google-protobuf
   ```

2. 安装 [protoc-gen-grpc-web](https://github.com/grpc/grpc-web/releases) 程序，生成 web javascript 文件
3. 安装 [protoc](https://github.com/protocolbuffers/protobuf/releases) 程序，支撑 protoc-gen-grpc-web 运行（添加到环境变量）
4. 使用命令生成 javascript 可执行文件：

   ```bash
      protoc -I=$DIR test.proto \
          --js_out=import_style=commonjs:$OUT_DIR \
          --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
   ```

5. 在项目中引用：

   ```js
   import { EchoServiceClient } from './proto/echo_grpc_web_pb';
   import GrpcWebClient from '../index';

   const baseUrl = `localhost:8080`;

   export default new GrpcWebClient(EchoServiceClient, baseUrl);
   ```
