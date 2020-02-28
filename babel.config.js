module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '13.5',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'syntax-async-functions',
  ],
};
