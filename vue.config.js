const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://weatherapp-nodejs-xbzt.onrender.com',  
        changeOrigin: true,  
        secure: true,        
        pathRewrite: {
          '^/api': '', 
        },
      },
    },
  },
});
