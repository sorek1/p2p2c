# Redirect

In this example we will be deploying a simple redirect from a `www` domain to a naked one.

### Deploy with Now

First, we need to create an empty `index.html`. Then we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use `@now/static` to properly deploy our `index.html`. We will then work with our `"routes"` configuration to define the behavior of our redirect. In this case, we will set a status header with the code `301` and also forward the path to our redirect location.

```
{
  "version": 2,
  "alias": [
    "www.example.sh"
  ],
  "builds": [
    { "src": "index.html", "use": "@now/static" }
  ],
  "routes": [
    { "src": "/(.*)", "status": 301, "headers": { "Location": "https://example.sh/$1" }}
  ]
}
```

We are now ready to deploy the redirect.

```
now
```

Once the deployment is created, you can alias by running:

```
now alias
```
