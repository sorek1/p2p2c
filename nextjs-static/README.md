# Static Next.js

In this example we will be deploying a simple "Hello World" example with Next.js static export

### Getting started with Next.js

- Create a `pages` folder with an `index.js` file with the following code:

```jsx
import Link from 'next/link'
import Header from '../components/header'

export default () => (
  <main>
    <Header />
    <section>
      <Link href="/about">
        <a>Go to About Me</a>
      </Link>
    </section>
  </main>
)
```

- Now lets create an `about.js` file inside the `pages` folder with the following code:

```jsx
import { Component } from 'react'
import Link from 'next/link'
import Header from '../components/header'

class AboutPage extends Component {
  render() {
    return (
      <main>
        <Header />
        <section>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
        </section>
      </main>
    )
  }
}

export default AboutPage
```

- As you might noticed we have a component that is share by both `index.js` and `about.js` files, lets create that one now. Create a folder named `components` with a file named `header.js` on it and add the following code:

```jsx
export default () => (
  <header>
    <h1>Next.js Example</h1>
  </header>
)
```

- Finally in order for Next.js to be deployed we could either have a `next.config.js` or a `package.json`, for this example we are just going to create a `next.config.js` with the following code:

```
module.exports = {}
```

### Deploy a Static version to Now

First you need to tell Now how to build the app using the `now-build` script in your `package.json`

```json
{
  "scripts": {
    "now-build": "next build && next export -o dist"
  }
}
```

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use `@now/static-build` to build and deploy our Next.js application selecting the `package.json` as our entry point. We will also define a name for our project (optional).

```json
{
  "version": 2,
  "name": "nextjs",
  "builds": [{ "src": "package.json", "use": "@now/static-build" }]
}
```

We are now ready to deploy the app.

```shell
$ now
```
