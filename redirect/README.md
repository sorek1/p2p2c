# Redirect

In this example we will be deploying a simple redirect from a `www` domain to a naked one.

### Deploy with Now

To redirect, you only need to use the `routes` property of a `now.json` file.

By adding the `version` key to the `now.json` file, we can specify to use the latest Now Platform version to use `routes`.

Following that, we can add a `routes` property that sets a status of `301`, a permanent redirect, and sends a `location` header of the redirect destination:

```json
{
    "version": 2,
    "alias": [
        "www.example.sh"
    ],
    "routes": [
       { "src": "/(.*)", "status": 301, "headers": { "Location": "https://example.sh/$1" }}
    ]
}
```

> Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

Finally, deploy the redirect using [Now CLI](https://zeit.co/docs/v2/getting-started/installation):

```
now
```

Once the deployment is created, you can [alias it](https://zeit.co/docs/v2/domains-and-aliases/adding-a-domain/) to the defined alias in the `now.json` file by running:

```
now alias
```

Now, when visiting either the alias or deployment URL, the visitor will get redirected to the location set via the `routes` in the `now.json` file.
