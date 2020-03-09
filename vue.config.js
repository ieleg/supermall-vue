const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components)'))
      //别名失败了
  }
};
