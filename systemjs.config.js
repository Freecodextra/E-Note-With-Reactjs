SystemJS.config({

  baseURL:'https://unpkg.com/',

  defaultExtension: false,
  packages:{
    "/": "js"
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    },
    '*.jsx': {
      'babelOptions': {
        react: true
      }
    },
    '*.css': {
      loader: 'css'
    },
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@17/umd/react.production.min.js',
    'react-dom': 'react-dom@17/umd/react-dom.production.min.js',
    'react-transition-group': 'react-transition-group/dist/react-transition-group.js',
    'react-router-dom': 'react-router-dom@5.0.0/umd/react-router-dom.min.js',
    'css': 'systemjs-plugin-css@latest/css.js',
    'react-notifications-component': '@types/react-notifications-component',
    'react-simple-typewriter': 'typewriter-effect@latest/dist/core.js',
    'prop-types': 'prop-types@15.6/prop-types.min.js',
    'react-table': 'react-table/6.11.5/react-table.min.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./src/index.jsx')
  .catch(console.error.bind(console));