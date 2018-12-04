# Gatsby

In this example we will be deploying a simple "Hello World" example with Gatsby.

### Getting started with Gatsby

Start a new Gatsby project using:

```
npx gatsby new <project name>
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use `@now/static-build` to build and deploy our Gatsby application selecting the `package.json` as our entry point. We will also define a name for our project (optional).

```json
{
    "version": 2,
    "name": "gatsby",
    "builds": [
        { "src": "package.json", "use": "@now/static-build", "config": {"distDir": "public"} }
    ]
}
```

Now, since it uses `@now/static-build`, we need to also include a script in `package.json` named `"now-build"`. This script specifies what command now will run on the server to "build" your application. Also, notice that this builder accepts a configuration called `"distDir"`, which should point to the output directory of our build script.

We are now ready to deploy the app.

```
now
```
