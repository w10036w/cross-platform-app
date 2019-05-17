# Cross Platform React Starter

## Usage

- install globally
  `npm i -g graphql-cli graphql-cli-voyager`
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
- [why not momentjs](https://inventi.studio/en/blog/why-you-shouldnt-use-moment-js)
- [monorepos](https://hackernoon.com/4-ways-to-go-monorepo-in-2019-ea5d19fc1f08)
- [cross-platform-tradeoffs](https://github.com/necolas/react-native-web/issues/1215)
- [why context hell is acceptable](https://www.jernejsila.com/2018/03/04/new-react-context-api/)

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

## React Hooks advanced understanding

```js
// mimick `constructor` or `componentWillMount`
const instance = useRef(null);
useState(() => {
  instance.current = "initial value";
});

// mimick `forceUpdate`
function useForceUpdate() {
  const [_, forceUpdate] = useState(0);
  return () => forceUpdate(x => x + 1); // update a irrelevant state
}

// mimick `componentDidUpdate` or both `componentDidMount` and `componentDidUpdate`
let mount; // define this inside function component
useEffect(() => {
  console.log("did mount and update");
  if (mount) {
    console.log("did update");
  } else {
    mount = true;
  }
}); // don't pass the 2nd argument, meaning always exec

// mimick `componentDidMount`
useEffect(() => {
  if (!mount) {
    mount = true;
    console.log("did mount");
  }
}, []); // no deps, only exec once

// mimick `componentWillUnmount`
useEffect(() => {
  return () => {}; // the return fn is executed at the end of the component
});

// !! Capture Value for useState, useEffect (if 2nd argument is undefined)
// !! Capture Value is not for useRef
const [temp, setTemp] = React.useState(5);
// temp, setTemp are CONST
// they are different in each new render
const log = () => {
  setTimeout(() => {
    console.log("initially temp = 5，now temp =", temp); // still 5!!
  }, 3000);
};

return (
  <div
    onClick={() => {
      log(); // when triggered, temp=5, "captured"
      setTemp(3);
    }}
  >
    click to see log
  </div>
);

// if need to modify props (computed values), consider using `useMemo`
// to cache results until the props change
function Button({ size, color, children }) {
  const textColor = useMemo(
    () => slowlyCalculateTextColor(color),
    [color] // ✅ `textColor` is not recalculated until `color` changes
  );
  return (
    // ✅ `size` is always updated!
    <button className={"Button-" + textColor + "-" + size}>{children}</button>
  );
}

// useEffect is async using requestIdleCallback
// uselayoutEffect is sync
```

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