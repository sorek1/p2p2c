# Creating a server with express

In this example, we will create a simple server with express.

### First steps for the creation of our server with express

- Let's start with adding dependency:

```
yarn add express
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use `@now/node-server`  to a file that opens a HTTP server that listens on a port.

In this example, we will set up an Express.js application. We will also define a name for our project (optional).

```json
{
    "version": 2,
    "name": "express",
    "builds": [
        { "src": "index.js", "use": "@now/node-server" }
    ]
}
```

We are now ready to deploy the app.

```
now
```
