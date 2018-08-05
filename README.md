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
| [misc-dump](https://misc-dump-v2.now.sh) | [Node.js](https://en.wikipedia.org/wiki/Node.js) | An app that simply logs information about incoming requests and the system it's running on | 26.1M |
| [misc-socket.io-chat](https://misc-socketio-chat-v2.now.sh) | [Node.js](https://en.wikipedia.org/wiki/Node.js) | The socket.io [chat demo](https://socket.io/demos/chat/) | 20.2M |
| [misc-socket.io-whiteboard](https://misc-socketio-whiteboard-v2.now.sh) | [Node.js](https://en.wikipedia.org/wiki/Node.js) | The socket.io [whiteboard demo](https://socket.io/demos/whiteboard/) | 20.2M |
| [misc-web-tty](https://misc-web-tty-v2.now.sh) | [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) | A fully functional terminal in the browser powered by [gotty](https://github.com/yudai/gotty) | 6.1M |
| [node-hello-world](https://node-hello-world-v2.now.sh) | [Node.js](https://en.wikipedia.org/wiki/Node.js) | A minimal (1LOC) server in node | 19.2M |
| [node-http-microservice-pkg](https://node-http-microservice-pkg-v2.now.sh) | [Node.js](https://en.wikipedia.org/wiki/Node.js) | A microservice in Node, packaged with [pkg](https://github.com/zeit/pkg) | 19.3M |
| [node-micro](https://node-micro-v2.now.sh) | [Node.js](https://en.wikipedia.org/wiki/Node.js) | A microservice in Node written with [micro](https://github.com/zeit/micro) | 19.6M |
| [node-react](https://node-react-v2.now.sh) | [Node.js](https://en.wikipedia.org/wiki/Node.js) | Deploys a react app created using [create-react-app](https://github.com/facebook/create-react-app) | 700K |
| [php-7-hello-world](https://php-7-hello-world-v2.now.sh) | [PHP](https://en.wikipedia.org/wiki/PHP) | A tiny website served using [php-fpm](https://php-fpm.org/) | 6.4M |
| php-wordpress\* | [PHP](https://en.wikipedia.org/wiki/PHP) | A [wordpress](https://wordpress.org/) | NaN |
| [python-django](https://python-django-v2.now.sh) | [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) | A [Django](https://www.djangoproject.com/) app | 49.1M |
| [python-flask](https://python-flask-v2.now.sh) | [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) | A [Flask](http://flask.pocoo.org/) app | 38.1M |
| [python-hello-world](https://python-hello-world-v2.now.sh) | [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) | A webserver powered by the built-in [http.server](https://docs.python.org/3/library/http.server.html) module | 33.1M |
| [ruby-http-sinatra](https://ruby-http-sinatra-v2.now.sh) | [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)) | A [Sinatra](http://sinatrarb.com/) app | 58.7M |
| [rust-http-microservice](https://rust-http-microservice-v2.now.sh) | [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) | A webserver powered by [hyper](https://hyper.rs/) | 2.3M |

\*The `php-wordpress` demo is coming soon.
