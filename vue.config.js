module.exports = {
  devServer:{
    open:true
  },
  css: {
    requireModuleExtension:false,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
};