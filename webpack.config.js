const path = require('path');

module.exports = {
    // ... Your existing webpack configuration ...

    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        publicPath: '/',
        compress: true,
        port: 8080,
    },
};
