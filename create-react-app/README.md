# Create React App

In this example we will be deploying a simple "Hello World" example with Create React App.

### Getting started with Create React App

- Start a new Create React App project:

```
npx create-react-app <project name>
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use @now/static-build to build and deploy our Vue application selecting the `package.json` as our entry point. We will also define a name for our project (optional). The `routes` property makes sure requests like `/non-existent-page` are routed to the Create React App `index.html`.

```json
{
    "version": 2,
    "name": "create-react-app",
    "builds": [
        { "src": "package.json", "use": "@now/static-build" }
    ],
    "routes": [
      {"src": "^/static/(.*)", "dest": "/static/$1"},
      {"src": ".*", "dest": "/index.html"}
    ]
}
```

We are now ready to deploy the app.

```
now
```