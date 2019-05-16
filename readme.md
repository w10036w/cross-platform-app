# Cross Platform React Starter

## Usage

- customize the app name in `/app.json`, eslint in `/.eslintrc.js`, babel in `/.babelrc.js`
- `npm i` install modules
- `npm run eject` prepare for app
- `npm start` start app packager
- `npm run ios` or `npm run android` to run app
- `npm run start:web` to run web
- more info check `/package.json`

## Knowledge

- [react-native-web examples](http://necolas.github.io/react-native-web/examples/)
- [primitives](https://hackernoon.com/building-cross-platform-applications-with-a-universal-component-library-e6292ca9a15)
- [ssr](https://medium.freecodecamp.org/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e)
- [cross-platform-tradeoffs](https://github.com/necolas/react-native-web/issues/1215)
- [fetch in hooks](https://www.robinwieruch.de/react-hooks-fetch-data/)
- [apollo vs relay](https://www.prisma.io/blog/relay-vs-apollo-comparing-graphql-clients-for-react-apps-b40af58c1534)
- [cross-app](https://gh-viewer.gitbook.io/creating-a-cross-platform-app-using-react/adding-navigation)

## Todo

- client
  - [ ] Relay mock data
    - [graphql-anywhere](https://www.npmjs.com/package/graphql-anywhere)
  - [ ] [how to use fragments in relay](https://www.apollographql.com/docs/react/advanced/fragments)
  - [ ] react-native-animatable
  - [ ] state management floway rxjs effector
  
- web only
  - [ ] client set head `Accept-Encoding: gzip`
  - [ ] polyfill from Financial Time `<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>`

- app only
  - [ ] [code push](https://github.com/rccoder/blog/issues/27)

## Common Issues

- chokidar (required by @babel/cli) relies on an old version fsevents, whichi has issues in node v12+; use node v10.15.x as of now.
- reset react-native cache
  - `npm cache clean -f`
  - `npm i`
  - `watchman watch-del-all`
  - kill watchman daemon process
  - `rm -fr $TMPDIR/metro*`
- [Error: `fsevents` unavailable](https://github.com/expo/expo/issues/854)

## Archives

<details>
  <summary>Click to view</summary>
    <h3>relay</h3>
    <p>relay npm script</p>
    <code>"relay": "npm run schema && relay-compiler --src ./src --schema ./src/schema.graphql --extensions js jsx --watch"</code>
    <p>deps</p>
    <code>react-relay relay-runtime relay-compiler babel-plugin-relay eslint-plugin-relay</code>
</details>