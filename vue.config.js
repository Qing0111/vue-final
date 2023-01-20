const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // publicPath: "/vue-final/dist/",
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue-final/'
  : '/',
});
