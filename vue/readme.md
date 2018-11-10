# Vue

In this example we will be deploying a simple "Hello World" example with Vue CLI.

### Getting started with Vue

- Install the Vue CLI:

```
npm install -g @vue/cli
```

- Create your Vue project:

```
vue create <project name>
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use @now/static-build to build and deploy our Vue application selecting the `package.json` as our entry point. We will also define a name for our project (optional). The `routes` property makes sure requests like `/non-existent-page` are routed to the Vue `index.html`.

```
{
    "version": 2,
    "name": "vue",
    "builds": [
        { "src": "package.json", "use": "@now/static-build" }
    ],
    "routes": [
      {"src": "^/js/(.*)", "dest": "/js/$1"},
      {"src": "^/css/(.*)", "dest": "/css/$1"},
      {"src": "^/img/(.*)", "dest": "/img/$1"},
      {"src": ".*", "dest": "/index.html"}
    ]
}
```

We are now ready to deploy the app.

```
now
```