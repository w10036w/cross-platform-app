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
- [monorepos](https://hackernoon.com/4-ways-to-go-monorepo-in-2019-ea5d19fc1f08)
- [cross-platform-tradeoffs](https://github.com/necolas/react-native-web/issues/1215)

## Common Issues

- chokidar (required by @babel/cli) relies on an old version fsevents, whichi has issues in node v12+; use node v10.15.x as of now.
- reset react-native cache
  - `npm cache clean -f`
  - `npm i`
  - `watchman watch-del-all`
  - kill watchman daemon process
  - `rm -fr $TMPDIR/metro*`