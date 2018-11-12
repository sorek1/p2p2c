# Creating a application with gatsby

In this example, we will create a simple application.

### First steps for the creation of our application.

- Execute the following command to create your project

```
npx gatsby new <project name>
```

### Implement with now

First we must add a `now.json` file to specify that we want to use our V2 Platform.

Simply by adding the version key, we can specify which Platform to use now. We must also define each of the constructors that we would like to use, in this case we will use `@now/static-build` to compile and implement our Gatsby application by selecting `package.json` as our entry point. We will also define a name for our project (optional).

```json
{
    "version": 2,
    "name": "gatsby-site",
    "builds": [
        { "src": "package.json", "use": "@now/static-build" }
    ]
}
```
we will add the following script in `package.json` so that now can compile the project without problems.

```json
{
    "script": {
        "now-build": "npm run build && mv public dist"
    }
}
```

Now we are ready to deploy the application.

```
now
```

This will be our result:

https://gatsby-site-pkafntcj5.now.sh/
