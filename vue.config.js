module.exports = {
    chainWebpack: config => {
        config.module
            .rule('eslint')
            .use('eslint-loader')
            .options({
                fix: true
            })
    },

    publicPath: '/myapp'
},

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/myapp/'
    : '/'
}