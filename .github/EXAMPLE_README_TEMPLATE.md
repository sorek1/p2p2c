# <Project>
Description

### Getting started with <Project>

- Step 1
- Step 2
- Step N

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use @now/go to build and deploy the date.go file. By default all other files will be statically served.

```
{
    "version": 2,
    "builds": []
}
```

We are now ready to deploy the app.

```
now
```