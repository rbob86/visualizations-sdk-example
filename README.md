# Visualizations with PblSession TypeScript Demo

Simple React/Express TypeScript app that demonstrates how to get up and running with the new Looker visualization components. This demo highlights one method of creating the session required to initialize the **sdk** object.

## Overview

In order to instantiate a new Looker SDK object on the front end, a session instance is required. This session instance is where authentication logic is provided. From the [npm package documentation](https://www.npmjs.com/package/@looker/sdk):

> All requests to the Looker API server require an access token. For browser implementations, authentication is typically achieved via OAuth as described in cors.md or a Proxy Server.

In addition to the Proxy server and OAuth implementations, you can also create your own custom logic. This demo demonstrates how to do that by extending the AuthSession class. This custom class retrieves an auth token from your custom backend endpoint and uses that to initialize the front end sdk object.

## Relevant Files

- client/

  - **.env**
  - src/
    - components/
      - [**Home.tsx**](https://github.com/rbob86/visualizations-sdk-example/blob/main/client/src/components/Home.tsx)
    - [utils/](https://github.com/rbob86/visualizations-sdk-example/tree/main/client/src/utils)
      - **LookerSDK.ts**
      - **PblSession.ts**

- api/
  - **.env**
  - [src/routes/auth.ts](https://github.com/rbob86/visualizations-sdk-example/blob/main/api/src/routes/auth.ts)

## Try it out

- Rename both **.env.example** files (one in /client and one in /api) to **.env** and edit the values appropriately
- Run `npm install` in /client
- Edit **Home.tsx** line 6 with a working query Id
- Run `npm run start` in /client
- Run `npm install` in /api
- Edit **auth.ts** line 9 and provide the email of a user that exists in your Looker instance
- Run `npm run start` in /api

## In-depth

On the backend, the /api/token endpoint is leveraging the Node SDK to find a particular user, and that user's id is then being used to login (retrieve an access token). This token is provided to the front end to fuel the PblSession being created.

On the front end, PblSession is overriding necessary methods from the abstract class AuthSession in order to provide logic for retrieving the token from /api/token:

```
abstract authenticate(props: IRequestProps): Promise<IRequestProps>;
abstract isAuthenticated(): boolean;
abstract getToken(): Promise<any>;
```

In the LookerSDK file, a new PblSession is instantiated and used to create a Looker40SDK instance. This sdk object is provided to the Home component, which then passes it to the new Query component, along with a query id.
