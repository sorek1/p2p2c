# docz

In this example, we create [a docz project](https://docz.site) and make it ready for [deployment on Now](https://zeit.co/docs/v2/deployments/basics/) in just a few steps.

If you have already got a [docz project setup](https://www.docz.site/introduction/getting-started), feel free to skip to [Step 2 of this example guide](#step-2-preparing-to-deploy).

## Step 1: Getting Started with docz

First, to [get up-and-running with docz](https://www.docz.site/introduction/getting-started), install it as a dependency in the project folder you are working in:

```shell
yarn add --dev docz
```

Once it is installed, open the `package.json` file and add the following scripts:

```json
{
  ...
  "scripts": {
    "dev": "docz dev",
    "build": "docz build"
  }
}
```

You can now build and launch your docz project locally by running:

```shell
yarn dev
```

Initially, the project will not have any content, but you can add a file anywhere in the project that includes a `.mdx` file extension. You can create a simple file that has a name, some content, and tells docz that the route should be `/`:

```
---
name: Hello world
route: /
---

# Hello world!

I'm a documentation page, using MDX, created using [docz](https://docz.site) and deployed with [ZEIT Now](https://zeit.co/now)!
```

With our docz project running, with the dev script, you will now see our newly created documentation page built and at the root of our project URL!

## Step 2: Preparing to Deploy
To deploy to Now, you need to tell Now how to build our docz project. You can do this by first creating a `now.json` file:

```json
{
  "version": 2,
  "name": "my-docz-project",
  "builds": [
    { "src": "package.json", "use": "@now/static-build" }
  ]
}
```

The above configures the project to:
- Build on [Now 2.0](https://zeit.co/docs/v2/platform/overview/#versioning)
- Have [a name](https://zeit.co/docs/v2/deployments/configuration/#name)
- When deploying, use the [`@now/static-build` builder](https://zeit.co/docs/v2/deployments/official-builders/static-build-now-static-build/) to build our app

However, the `@now/static-build` builder requires that you pass it instructions on how to build it and that the subsequent build is placed in the `dist` directory [unless otherwise specified](https://zeit.co/docs/v2/deployments/official-builders/static-build-now-static-build/#configuring-the-dist-directory).

To tell docz to place our build in the `dist` directory, you can create a `doczrc.js` file with the following contents:

```js
export default {
  dest: '/dist'
}
```

Next, you can provide Now with the necessary build instructions by adding a `now-build` script to the `package.json` file:

```json
{
  ...
  "scripts": {
    ...
    "now-build": "yarn build"
  }
}
```

And that's all. Your docz project is ready to be deployed to Now.

## Step 3: Deploying to Now

The final step is to run the following in your terminal, from the root of your docz project:

```shell
now
```

## Resources
- [Visit our documentation](https://zeit.co/docs/v2/getting-started/introduction-to-now/) for more information on using Now to deploy your projects.
- [Visit the docz site](https://docz.site) to learn more about configuring your new documentation project ready to be [pushed to production](https://zeit.co/docs/v2/domains-and-aliases/aliasing-a-deployment/) on Now

