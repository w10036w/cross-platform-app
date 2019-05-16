const platform = process.env.PLATFORM

const resolver = [
  'module-resolver',
  {
    alias: {
      '~comp': './src/components',
      '~const': './src/constants',
      '~screen': './src/screens',
      '~env': './.env.general.js',
      '~graphql': './src/graphql',
      // ? R for regional, S for screen, C for components
      // '^~RS/(.+)': ([, dir]) => `${__dirname}/src/screens/${dir}.ap`,
      // "^~RC/(.+)": ([, dir]) => `${__dirname}/src/components/${dir}.ap`
    },
  },
]

const stages = [
  // Stage 0
  '@babel/plugin-proposal-function-bind',
  // Stage 1
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-logical-assignment-operators',
  ['@babel/plugin-proposal-optional-chaining', { loose: false }],
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
  '@babel/plugin-proposal-do-expressions',
  // Stage 2
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  '@babel/plugin-proposal-function-sent',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-throw-expressions',
  // Stage 3
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-syntax-import-meta',
  ['@babel/plugin-proposal-class-properties', { loose: false }],
  '@babel/plugin-proposal-json-strings',
]
const cherryPick = [
  ['import', { libraryName: 'lodash', libraryDirectory: '', camel2DashComponentName: false }, 'lodash'],
  ['import', { libraryName: '@ant-design/react-native' }],
]

const plugins = [resolver, 'macros', ...cherryPick, ...stages]

const presetsWeb = [
  // [
  //   '@babel/env',
  //   {
  //     targets: { node: true }, // ='current'
  //     // modules: 'commonjs',  // default
  //     corejs: '3',
  //     useBuiltIns: 'usage',
  //   },
  // ],
  ['react-app'],
]
const presetsApp = ['module:metro-react-native-babel-preset']
const presets = platform === 'web' ? presetsWeb : presetsApp

// https://babeljs.io/docs/en/babel-preset-minify
const minify = 'minify'
// The env key will be taken from process.env.BABEL_ENV,
// when this is not available then it uses process.env.NODE_ENV
// if even that is not available then it defaults to "development".
const env = {
  production: {
    plugins,
    presets: [...presets, minify],
  },
}

module.exports = { plugins, presets, env }
