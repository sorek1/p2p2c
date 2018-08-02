# Now Cloud v2 Demos

This is a repository with examples of the new Now Cloud 2.0 infrastructure
for *Serverless Docker Deployments*.

These deployments:
- Automatically scale to zero with no traffic
- Boot from cold in under a second
- Are built reproducibly from `Dockerfile`

## Overview

| Demo | Language | Description | Size |
|:------|:----------:|:-------------|------|
| [asm-httpd](https://bash-http-microservice.v2.zeit.sh) | [x86_64 ASM](https://en.wikipedia.org/wiki/X86_assembly_language) | Deploys [`asmhttpd`](https://github.com/jcalvinowens/asmhttpd) which servers a static file | 12.0K |
| [bash-httpd](https://bash-httpd.v2.zeit.sh) | [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))  | Uses [`bashttpd`](https://github.com/tootallnate/bashttpd) to HTTP requests with the output of Bash commands | 4.3M |
| [c-microhttpd](https://c-microhttpd.v2.zeit.sh) | [C](https://en.wikipedia.org/wiki/C_(programming_language)) | Uses [libmicrohttpd](https://www.gnu.org/software/libmicrohttpd/) to implement a webserver | 8.3M |
| [crystal-hello](https://crystal-hello.v2.zeit.sh) | [Crystal](https://en.wikipedia.org/wiki/Crystal_(programming_language)) | Uses the [`http/server` module](https://crystal-lang.org/api/0.25.1/HTTP/Server.html) to implement a webserver | 4.0M |
| [go-hello](https://go-hello.v2.zeit.sh) | [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) | Uses the [`http` package](https://golang.org/pkg/net/http/) to implement a webserver | 1.8M |
