module.exports = {
    publicPath: './', //执行npm run build打包命令的时候，调整资源的引用路径
    chainWebpack: (config) => {
        config.plugins.delete('fork-ts-checker') // 禁用fork-ts-checker
    },
    lintOnSave: false,
    runtimeCompiler: true,
    devServer: {
      open: true,
      overlay: {
        warning: false,
        errors: false
      }
    }
}