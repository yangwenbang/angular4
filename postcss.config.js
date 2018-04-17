// 必须放到根目录下
// 不然会报错 Module build failed: Error: No PostCSS Config found in xxx
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 5 versions']
        })
    ]
}