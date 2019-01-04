# Go

In this example we will be deploying a simple "Hello World" example with GoLang.

### Getting started with Go

- Create a `index.go` file with the following code:

```go
package main

import (
	"fmt"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from Go on Now 2.0!")
}
```

### Deploy with Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/go` to build and deploy the all GoLang files. We will also define a name for our project (optional).

```json
{
    "version": 2,
    "name": "go",
    "builds": [
        { "src": "*.go", "use": "@now/go" }
    ]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We are now ready to deploy the app.

```
now
```
