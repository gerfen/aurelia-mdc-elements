module.exports = (api) => {
  api.cache.using(() => {
    return 'babel:' + process.env.BABEL_TARGET + ' protractor:' + process.env.IN_PROTRACTOR;
  });

  return {
    "plugins": [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }]
    ],
    "presets": [
      [
        "@babel/preset-env", {
          "targets": process.env.BABEL_TARGET === 'node' ? {
            "node": process.env.IN_PROTRACTOR ? '6' : 'current'
          } : {
			"browsers": ['last 2 versions', 'not ie <= 11']
          },
          "loose": true,
          "modules": process.env.BABEL_TARGET === 'node' ? 'commonjs' : false
        }
      ]
    ]
  }
}
