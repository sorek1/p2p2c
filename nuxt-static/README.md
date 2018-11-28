# Static Nuxt

In this example we will be deploying a simple "Hello World" example with Nuxt static generate

### Getting started with Nuxt

- Let's start by adding a `package.json` with the following dependencies:

```
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

- Finally in order for Nuxt to be deployed staticaly we will use the `package.json` and define our build options for Nuxt creating a `nuxt.config.js` with the following code:

```
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

First you need to tell Now how to build the app using the `now-build` script in your `package.json`

```json
{
  "scripts": {
    ...
    "now-build": "nuxt generate"
  }
}
```

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use `@now/static-build` to build and deploy our Nuxt application selecting the `package.json` as our entry point. We will also define a name for our project (optional).

```json
{
  "version": 2,
  "name": "nuxt-static",
  "builds": [
    { "src": "package.json", "use": "@now/static-build" }
  ]
}
```

We are now ready to deploy the app.

```shell
$ now
```
