module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .test(/\.vue$/)
            .use('iview-loader')
            .loader('iview-loader')
            .options({
                prefix: true
            })
        // https://www.reddit.com/r/vuejs/comments/8kn8dh/autofix_linting_errors_with_vuecli_3/e2rz9bv/
        config.module.rule('eslint')
            .use('eslint-loader')
            .options({
                fix: true
            })
    },
    // https://github.com/vuejs-templates/webpack/issues/215#issuecomment-427805716
    runtimeCompiler: true
}