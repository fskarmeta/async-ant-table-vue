module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        math: "always",
      },
    },
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/async-ant-table-vue/" : "/",
};
