# Go

In this example we will be deploying a simple "Hello World" example with GoLang.

### Getting started with Go

- Create a `index.go` file with the following code:

```
package main

import (
	"fmt"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from Go on Now Lambda!")
}
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use @now/go to build and deploy the all GoLang files. We will also define a name for our project (optional).

```
{
    "version": 2,
    "name": "go",
    "builds": [
        { "src": "*.go", "use": "@now/go" }
    ]
}
```

We are now ready to deploy the app.

```
now
```
