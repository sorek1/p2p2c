# Static Nuxt

In this example we will be deploying a simple "Hello World" example with Nuxt static generate

### Getting started with Nuxt

- Let's start by adding a `package.json` with the following dependencies:

```json
{
    "name": "nuxt-static",
    "version": "1.0.0",
    "private": true,
    "scripts": {
        "dev": "nuxt",
        "build": "nuxt build",
        "start": "nuxt start",
        "generate": "nuxt generate",
    },
    "dependencies": {
        "cross-env": "^5.2.0",
        "nuxt": "^2.0.0"
    },
    "devDependencies": {
        "nodemon": "^1.11.0"
    }
}
```

- Create a `pages` folder with an `index.vue` file with the following code:

```
<template>
  <section>
    <div>
      <Title/>
      <div class="links">
        <nuxt-link to="/about">About</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '~/components/Title.vue'

export default {
  components: {
    Title
  }
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>
```

- Now lets create an `about.vue` file inside the `pages` folder with the following code:

```jsx
<template>
  <section>
    <div>
      <Title/>
      <div class="links">
        <nuxt-link to="/">Go to home</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '~/components/Title.vue'

export default {
  components: {
    Title
  }
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>

```

- As you might noticed we have a component that is share by both `index.vue` and `about.vue` files, lets create that one now. Create a folder named `components` with a file named `Title.vue` on it and add the following code:

```jsx
<template>
  <h1>Static Nuxt Example on Now 2.0</h1>
</template>

<style>
h1 {
  font-size: 48px;
}
</style>

```

- Finally in order for Nuxt to be deployed statically we will use the `package.json` and define our build options for Nuxt creating a `nuxt.config.js` with the following code:

```javascript
const pkg = require('./package')

module.exports = {
  mode: 'spa',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' }
}

```

### Deploy a Static version to Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/static-build` to build and deploy our Nuxt application selecting the `package.json` as our entry point. We will also define a name for our project (optional).

```json
{
    "version": 2,
    "name": "nuxt-static",
    "builds": [
        { "src": "package.json", "use": "@now/static-build" }
    ]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We also need to include a script in `package.json` named `"now-build"` that specifies what command Now will run on the server to "build" your application. Also notice that we are using `nuxt generate` that will create a folder called `dist` which Now identifies as the static folder.

```json
{
    "scripts": {
        ...
        "now-build": "nuxt generate"
    }
}
```

We are now ready to deploy the app.

```shell
$ now
```
