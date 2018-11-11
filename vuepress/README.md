# Vuepress

In this example we will be deploying a simple "Hello World" example with Vuepress.

### Getting started with Vuepress

First we need to install Vuepress as a development depenency running using `npm` or `yarn`, for this entire example we will be using `npm`:

```
npm install vuepress --save-dev
```

Next we need to add the Vuepress scripts to our `pacakge.json` file: 

```
{
  ...
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
  },
  ...
}
```

After we having installed Vuepress we are ready to start creating our docs using Markdown! Let's start by creating the `docs` folder which will contain all of our Markdown files with a `README.md` and the following code in it:


```
# Hello From Vuepress on Lambda!
```

Next we will create another section called Guide by creating a folder called `guide` with a `README.md` and the following code in it:


```
# Example Guide Section
```

Lastly we will create one more readme inside the `docs` folder but in this case we well call it `config.md`


```
# Example Guide Section
```

Now we are ready to configure Vuepress. We can do it by creating a folder called `.vuepress` inside the `docs` folder with a `config.js` and the following code:

```
module.exports = {
  title: 'Vuepress',
  description: 'This is a Zeit Now 2.0 example',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Config Page', link: '/config' },
    ]
  }
}
```

### Deploy a Vuepress version to Now

First you need to tell Now how to build the app using the `now-build` script in your `package.json`

```json
{
  ...
  "scripts": {
    ...
    "now-build": "npm run build && mv docs/.vuepress/dist dist"
  }
  ...
}
```

Then we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use @now/static-build to build and deploy our Vuepress application selecting the `package.json` as our entry point. We will also define a name for our project (optional).

```json
{
  "version": 2,
  "name": "vuepress",
  "builds": [
    {"src": "package.json", "use": "@now/static-build"}
  ]
}
```

We are now ready to deploy the app.

```shell
$ now
```

