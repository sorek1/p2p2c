# Node.js

In this example we will be deploying a simple "Hello World" example with Node.js.

### Getting started with Node.js

- Create a `index.js` file with the following code:

```
module.exports = (req, res) => {
  res.end(`Hello from Node.js on Now 2.0!`);
};
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use `@now/node` to build and deploy the all JavaScript files. We will also define a name for our project (optional).

```
{
    "version": 2,
    "name": "nodejs",
    "builds": [
        { "src": "*.js", "use": "@now/node" }
    ]
}
```

We are now ready to deploy the app.

```
now
```
