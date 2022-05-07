module.exports = {
  env: {
      browser: true,
      es2021: true,
      node: true,
  },
  extends: [
      'plugin:react/recommended',
      'airbnb',
      'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
  },
  plugins: [
      'react',
      '@typescript-eslint',
  ],
  rules: {
      'import/prefer-default-export': ['off'],
      'import/extensions': ['off'],

      'react/display-name': ['off'],
      'react/prop-types': ['off'],
      'react/require-default-props': ['off'],
      'react/no-unused-prop-types': ['off'],
      'react/jsx-props-no-spreading': ['off'],
      // Indent with 4 spaces
      '@typescript-eslint/indent': ['error', 4],
      // Indent JSX with 4 spaces
      'react/jsx-indent': ['error', 4],
      // Indent props with 4 spaces
      'react/jsx-indent-props': ['error', 4],

      // 예외룰
      'no-nested-ternary': ['off'],
      'no-plusplus': ['off'],

      // rn 룰
      'global-require': ['off'],
  },
  settings: {
      react: {
          createClass: 'createReactClass', // Regex for Component Factory to use,
          // default to "createReactClass"
          pragma: 'React', // Pragma to use, default to "React"
          fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
          version: 'detect', // React version. "detect" automatically picks the version you have installed.
          // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
          // It will default to "latest" and warn if missing, and to "detect" in the future
          flowVersion: '0.53', // Flow version
      },
      propWrapperFunctions: [
          // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`.
          // If this isn't set, any propTypes wrapped in a function will be skipped.
          'forbidExtraProps',
          { property: 'freeze', object: 'Object' },
          { property: 'myFavoriteWrapper' },
          // for rules that check exact prop wrappers
          { property: 'forbidExtraProps', exact: true },
      ],
      componentWrapperFunctions: [
          // The name of any function used to wrap components, e.g. Mobx `observer` function.
          // If this isn't set, components wrapped by these functions will be skipped.
          'observer', // `property`
          { property: 'styled' }, // `object` is optional
          { property: 'observer', object: 'Mobx' },
          { property: 'observer', object: '<pragma>' }, // sets `object` to whatever value `settings.react.pragma` is set to
      ],
      formComponents: [
          // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
          'CustomForm',
          { name: 'Form', formAttribute: 'endpoint' },
      ],
      linkComponents: [
          // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
          'Hyperlink',
          { name: 'Link', linkAttribute: 'to' },
      ],
  },
};