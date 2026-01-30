export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      exclude: /node_modules/i,
      selectorBlackList: ['html', 'body'],
      mediaQuery: true,
      minPixelValue: 0,
    },
  },
};
