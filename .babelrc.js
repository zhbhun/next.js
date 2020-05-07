module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10',
          browsers: ['iOS >= 8', 'Android >= 4.4', 'last 2 QQAndroid versions']
        },
        spec: false,
        loose: false,
        modules: 'commonjs',
        useBuiltIns: 'usage',
        corejs: 2
      }
    ],
    '@babel/preset-react',
    '@babel/preset-flow'
  ],
  'plugins': [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-transform-runtime', {
      'corejs': 2
    }],
    ['babel-plugin-transform-define', {
      'process.env.NEXT_VERSION': require('./package.json').version
    }]
  ]
}
