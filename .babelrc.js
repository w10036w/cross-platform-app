const platform = process.env.PLATFORM

const resolver = [
  'module-resolver',
  {
    alias: {
      '~comp': './src/components',
      '~const': './src/constants',
      '~screen': './src/screens',
      '~page': './src/pages',
      '~store': './src/stores',
      '~helper': './src/helpers',
      '~env': './.env.general.js',
      '~graphql': './src/graphql',
      // ? R for regional, S for screen, C for components
      // '^~RS/(.+)': ([, dir]) => `${__dirname}/src/screens/${dir}.ap`,
      // "^~RC/(.+)": ([, dir]) => `${__dirname}/src/components/${dir}.ap`
    },
  },
]

const cherryPick = [
  ['import', { libraryName: 'lodash', libraryDirectory: '', camel2DashComponentName: false }, 'lodash'],
  ['import', { libraryName: '@ant-design/react-native' }],
]

const plugins = [resolver, 'macros', ...cherryPick]

const presetsWeb = [['react-app']]
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
