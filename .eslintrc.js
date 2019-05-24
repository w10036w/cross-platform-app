// https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint#_=_

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['import', 'promise', 'react-hooks', 'emotion'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          // '.tsx',
          // '.ts',
        ],
      },
    },
  },
  rules: {
    // Possible Errors
    'for-direction': 2,
    'no-await-in-loop': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': [2, 'always'],
    'no-console': 1,
    'no-constant-condition': 1,
    'no-control-regex': 2,
    'no-debugger': 1,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-obj-calls': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 0,
    'no-unexpected-multiline': 0,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,

    // Best Practices
    'accessor-pairs': 2,
    'array-callback-return': 1,
    'block-scoped-var': 2,
    'class-methods-use-this': 0,
    'complexity': [0, { max: 10 }],
    'consistent-return': 0,
    'curly': [2, 'multi-line'],
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': [2, { allowKeywords: true }],
    'eqeqeq': [2, 'smart'],
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': [2, { allow: ['arrowFunctions', 'constructors'] }],
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    'no-implicit-coercion': 0,
    'no-implicit-globals': 0,
    'no-implied-eval': 2,
    'no-invalid-this': 0,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0,
    'no-multi-spaces': [
      2,
      {
        exceptions: {
          Property: true,
          VariableDeclarator: true,
          ImportDeclaration: true,
        },
      },
    ],
    'no-multi-str': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-restricted-properties': 0,
    'no-return-assign': [2, 'always'],
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-assign': [2, { props: true }],
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 0,
    'no-unused-labels': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-useless-return': 2,
    'no-void': 2,
    'no-warning-comments': 0,
    'no-with': 2,
    'prefer-promise-reject-errors': 2,
    'radix': 2,
    'require-await': 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'any'],
    'yoda': 2,

    // Strict Mode
    'strict': [2, 'never'],

    // Variables
    'init-declarations': 0,
    'no-catch-shadow': 0,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 0,
    'no-shadow': 1,
    'no-shadow-restricted-names': 1,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-unused-vars': [
      1,
      { vars: 'local', args: 'none', argsIgnorePattern: '^_' },
    ],
    'no-use-before-define': [2, { functions: true, classes: true }],

    // Node.js and CommonJS
    'callback-return': 0,
    'global-require': 0,
    'handle-callback-err': 2,
    'no-buffer-constructor': 2,
    'no-mixed-requires': 0,
    'no-new-require': 2,
    'no-path-concat': 0,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-restricted-modules': 0,
    'no-sync': 0,

    // Stylistic Issues
    'array-bracket-newline': [1, { multiline: true }],
    'array-bracket-spacing': 1,
    'array-element-newline': 0,
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'camelcase': [2, { properties: 'never' }],
    'capitalized-comments': 0,
    'comma-dangle': [1, 'always-multiline'],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': 2,
    'consistent-this': 0,
    'eol-last': 0,
    'func-call-spacing': 2,
    'func-name-matching': 0,
    'func-names': 0,
    'func-style': [2, 'declaration', { allowArrowFunctions: true }],
    'function-paren-newline': [2, 'consistent'],
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    'indent': [2, 2, { SwitchCase: 1 }],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': 0,
    'keyword-spacing': [2, { before: true, after: true }],
    'line-comment-position': 0,
    'linebreak-style': 0,
    'lines-around-comment': 0,
    'lines-between-class-members': [
      2,
      'always',
      { exceptAfterSingleLine: true },
    ],
    'max-depth': 0,
    'max-len': [2, { code: 120, ignoreUrls: true, ignoreRegExpLiterals: true }],
    'max-lines': 0,
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': 0,
    'max-statements-per-line': 0,
    'multiline-comment-style': 0,
    'multiline-ternary': [2, 'always-multiline'],
    'new-cap': [2, { newIsCap: true }],
    'new-parens': 2,
    'newline-per-chained-call': 0,
    'no-array-constructor': 0,
    'no-bitwise': [2, { allow: ['~'] }],
    'no-continue': 2,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-multi-assign': 2,
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-negated-condition': 2,
    'no-nested-ternary': 0,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-tabs': 0,
    'no-ternary': 0,
    'no-trailing-spaces': 1,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'nonblock-statement-body-position': 0,
    'object-curly-newline': [
      2,
      {
        ObjectExpression: { consistent: true },
        ObjectPattern: { consistent: true },
      },
    ],
    'object-curly-spacing': [1, 'always'],
    'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': [2, 'always'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [
      2,
      'before',
      { overrides: { '&&': 'ignore', '=': 'ignore' } },
    ],
    'padded-blocks': [2, 'never'],
    'padding-line-between-statements': 0,
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [1, 'single'],
    'require-jsdoc': 0,
    'semi': [2, 'never'],
    'semi-spacing': [2, { before: false, after: true }],
    'semi-style': [2, 'last'],
    'sprt-keys': 0,
    'sort-vars': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [
      2,
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, { words: true, nonwords: false }],
    'spaced-comment': [
      0,
      'always',
      { plugins: ['react'], exceptions: ['*'], markers: ['*'] },
    ],
    'switch-colon-spacing': [2, { before: false, after: true }],
    'template-tag-spacing': [2, 'never'],
    'unicode-bom': 0,
    'wrap-regex': 2,

    // ECMAScript 6
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, { before: true, after: true }],
    'constructor-super': 0,
    'generator-star-spacing': [2, { before: true, after: false }],
    'no-class-assign': 2,
    'no-confusing-arrow': [2, { allowParens: true }],
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-restricted-imports': 0,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': [2, 'properties'],
    'prefer-arrow-callback': 2,
    'prefer-const': 0,
    'prefer-destructuring': 0,
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'require-yield': 2,
    'rest-spread-spacing': [2, 'never'],
    'sort-imports': 0,
    'symbol-description': 2,
    'template-curly-spacing': [2, 'never'],
    'yield-star-spacing': [2, { before: false, after: true }],

    /*--- Plugin Specific Rules ---*/
    // react
    // 'react/no-deprecated': 2,
    // 'react/jsx-uses-react': 2,
    // 'react/jsx-uses-vars': 2,
    'react/prop-types': 0,
    'react/display-name': 1,

    // import
    'import/no-unresolved': [1, { commonjs: true, amd: true, ignore: ['^~.+$', 'noctx'] }],
    'import/named': 0, // react-router-native { Route }
    'import/default': 1,
    'import/no-webpack-loader-syntax': 2,
    'import/export': 2,
    'import/no-deprecated': 2,
    'import/no-mutable-exports': 2,
    'import/no-duplicates': 2,
    'import/no-namespace': 0,
    'import/newline-after-import': 2,
    'import/order': [
      2,
      {
        'newlines-between': 'never',
        'groups': [
          'builtin',
          ['internal', 'external'],
          ['parent', 'sibling'],
          'index',
        ],
      },
    ],

    // promise
    'promise/catch-or-return': [2, { terminationMethod: ['catch', 'finally'] }],
    'promise/always-return': 2,
    'promise/no-return-wrap': 2,
    'promise/param-names': 2,
    // 'promise/prefer-await-to-then': 2,
    // 'promise/prefer-await-to-callbacks': 2

    // react-hooks
    'react-hooks/rules-of-hooks': 1,

    // emotion
    'emotion/jsx-import': 1,
    'emotion/no-vanilla': 1,
    'emotion/import-from-emotion': 1,
    'emotion/styled-import': 1,
  },
}
