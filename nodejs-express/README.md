# Creating a server with Express

In this example, we will create a simple server with Express a fast, unopinionated, minimalist web framework for Node.js.

### Getting started with Express

Let's start with adding dependency:

```
yarn add express
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use `@now/node-server` in order to start a Node.js server using Express. We will also define a name for our project (optional).

```json
{
    "version": 2,
    "name": "nodejs-express",
    "builds": [
        { "src": "index.js", "use": "@now/node-server" }
    ]
}
```

We are now ready to deploy the app.

```
now
```
