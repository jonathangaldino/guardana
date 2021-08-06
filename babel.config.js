const { workspaces } = require('./package.json')

module.exports = {
  babelrcRoots: ['.', ...(workspaces.packages || workspaces)],
  presents: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [],
}
