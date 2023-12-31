const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/subscriber/sendmessage',
        createProxyMiddleware({
            target: 'https://api.elishatofunmi.com/',
            changeOrigin: true,
        })
    );
    app.use(
        '/other/endpoint',
        createProxyMiddleware({
            target: 'https://api.elishatofunmi.com/',
            changeOrigin: true,
        })
    );
};
