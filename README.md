# Now Examples

## Static Websites

These deployments:

- Have a build phase and then are served fully statically
- Get cached automatically by the Now CDN

### Overview

| Demo  | Description |
|:------|:------------|
| [create-react-app](https://cra.now.sh) | Deploy, test and build CRA |

## Serverless Docker (V2)

These deployments:

- Respond with dynamic data by running code
- Automatically scale to zero with no traffic
- Boot from cold in under a second
- Are built reproducibly from `Dockerfile`

### Overview

| Demo | Language | Description | Size |
|:------|:----------:|:-------------|------|
| [asm-httpd](https://asm-httpd-v2.now.sh) | [x86_64 ASM](https://en.wikipedia.org/wiki/X86_assembly_language) | Deploys [`asmhttpd`](https://github.com/jcalvinowens/asmhttpd) which serves a static file | 12.0K |
| [bash-httpd](https://bash-httpd-v2.now.sh) | [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))  | Uses [`bashttpd`](https://github.com/tootallnate/bashttpd) to HTTP requests with the output of Bash commands | 4.3M |
| [c-microhttpd](https://c-microhttpd-v2.now.sh) | [C](https://en.wikipedia.org/wiki/C_(programming_language)) | Uses [libmicrohttpd](https://www.gnu.org/software/libmicrohttpd/) to implement a webserver | 8.3M |
| [crystal-hello](https://crystal-hello-v2.now.sh) | [Crystal](https://en.wikipedia.org/wiki/Crystal_(programming_language)) | Uses the [`http/server` module](https://crystal-lang.org/api/0.25.1/HTTP/Server.html) to implement a webserver | 4.0M |
| [go-hello](https://go-hello-v2.now.sh) | [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) | Uses the [`http` package](https://golang.org/pkg/net/http/) to implement a webserver | 1.8M |
| [java-spark-graal](https://java-spark-graal-v2.now.sh) | [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) | Uses the [`Spark`](http://sparkjava.com/) framework and packages with [GraalVM `native-image`](http://www.graalvm.org/) | 5.3M |
| [misc-chat-roulette](https://misc-chat-roulette-v2.now.sh) | [Node.js](https://en.wikipedia.org/wiki/Node.js) | Implements a [WebSocket](https://en.wikipedia.org/wiki/WebSocket) server with a max concurrency of `2` | 19.3M |
