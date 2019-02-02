#  A Microsoft Graph Security API example using Next.js

## Introduction

This example shows how to create a serverless [Next.js](https://nextjs.org) app that authenticates with a Microsoft Azure Active Directory [(AAD)](https://azure.microsoft.com/en-us/services/active-directory/) and retrieves security alerts using the Microsoft [Graph API](https://developer.microsoft.com/en-us/graph).

## Environment Variables and Secrets

In this example all the configuration variables that needs to be typically
changed are provided as environment variables and all the sentive information
like API tokens are stored in using Now secrets.

The `now.json` file defines the following environment variables:

| Env variable name             | Description                                                                   | Example                                           |
|:------------------------------|:------------------------------------------------------------------------------|:--------------------------------------------------|
| `GRAPH_CLIENT_ID`             | The application ID of your application in the AAD.                            | `@graph-client-id`                                |
| `GRAPH_CLIENT_SECRET`         | A client secret token created for your application by the AAD.                | `@graph-secret-test`                              |
| `GRAPH_COOKIE_IV`             | Cookie encryption IV for `passport-azure-ad`. Not very sensitive. Always 12 chars. | `1234abcdef90`                               |
| `GRAPH_COOKIE_KEY`            | Cookie encryption key for `passport-azure-ad`. Sensitive. Always 32 chars.    | `@graph-cookie-key`                               |
| `GRAPH_LOGIN_REDIRECT_URL`    | An URL where the authentication continues after a token has been issued. Must be an FQDN + `/token` in this example. | `https://grahp.yourdomain.com/token` |
| `GRAPH_LOGOUT_REDIRECT_URL`   | An URL where the user is redirected after logout.                             | `https://grahp.yourdomain.com/`                   |
| `GRAPH_METADATA_URL`          | The metadata endpoint of the tenant. Not very sensitive, the example uses a secret called `@graph-metadata` but it's not necessary to use a secret for this URL. | `https://login.microsoftonline.com/your_tenant_guid/v2.0/.well-known/openid-configuration` |

See Microsoft's [Node.js example](https://github.com/microsoftgraph/nodejs-security-sample/) for
more information about setting up your application configuration in AAD.

## Resources

This example covers the following frameworks and tools:

- [Graph JavaScript SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript)
- [Microsoft Azure Active Directory Passport.js Plug-In](https://github.com/AzureAD/passport-azure-ad)
- [Next.js](https://github.com/zeit/next.js)
- [Passport](https://github.com/jaredhanson/passport)
