# Gridsome

> Gridsome is a Vue-powered static site generator for building websites for any CMS or data source. It uses a local unified GraphQL data layer for all data, and can generate thousands of pages in seconds. Gridsome is heavily inspired by Gatsby (A React.js alternative).

## Step 1: Getting Started with Gridsome

Setup with Gridsome by using the CLI package from the npm registry:

```shell
npx @gridsome/cli create my-gridsome-project
```

The above command will have setup a gridsome project, ready to go. This includes scripts in the `package.json` file such as `develop` which will start a local development server.

```shell
yarn develop
```

To learn more about developing with Gridsome, view their documentation: https://gridsome.org/docs

## Step 2: Preparing to Deploy

To deploy to Now, you need to tell Now how to build our Gridsome project. You can do this by first creating a `now.json` file:

```json
{
  "version": 2,
  "builds": [
    { "src": "package.json", "use": "@now/static-build" }
  ]
}
```

The above configures the project to:

- Build on [Now 2.0](https://zeit.co/docs/v2/platform/overview/#versioning)
- When deploying, use the [@now/static-build builder](https://zeit.co/docs/v2/deployments/official-builders/static-build-now-static-build/) to build our app

  However, the @now/static-build builder requires that you pass it instructions on how to build the project. We can do this by creating a `now-build` script in the `package.json` file:

```json
{
  ...
  "scripts": {
    ...
    "now-build": "yarn build"
  }
}
```

And with that, your deployment setup is complete and the Gridsome project is ready to deploy live.

## Step 3: Deploying to Now

The final step is to run the following in your terminal, from the root of your Gridsome project:

```shell
now
```

## Resources
- [Visit our documentation](https://zeit.co/docs) for more information on using Now to deploy your projects.
- [Visit the Gridsome site](https://gridsome.org/docs) to learn more about configuring your new project ready to be pushed to production on Now
