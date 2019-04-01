module.exports = function(api) {
  const isTest = api.env('test');

  // Target current node version when in test environment
  // Otherwise use targets defined in .browserslistrc
  const presets = isTest
    ? [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-react']
    : [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            corejs: 2,
          },
        ],
        '@babel/preset-react',
      ];

  return {
    presets,
  };
};
