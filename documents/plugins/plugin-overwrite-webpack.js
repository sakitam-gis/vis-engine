module.exports = function () {
  return {
    name: 'plugin-overwrite-webpack',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false
              }
            },
          ],
        },
      };
    },
  };
};
