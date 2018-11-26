# Python

In this example we will be deploying a simple "Hello World" example with Python.

### Getting started with Python

- Create a `index.py` file with the following code:

```
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(str("Hello from Python on Now 2.0!").encode())
        return
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use `@now/python` to build and deploy the all Python files. We will also define a name for our project (optional).

```
{
    "version": 2,
    "name": "python",
    "builds": [
        { "src": "*.py", "use": "@now/python" }
    ]
}
```

We are now ready to deploy the app.

```
now
```
