const http = require('http');
const config = require('../config');
const openTheJar = require("./aboregie");
const openBrowser = require('./browser');

const requestListener = function (req, res) {
    const url = new URL(req.url, 'http://' + req.headers.host);
    const params = url.searchParams;
    const searchUrl = params.get('url');
    const browser = params.get('browser');
    let msg = 'nothing to do';
    if (browser === 'aboregie') {
        openTheJar(searchUrl);
        msg = 'opened aboregie';
    }
    else if (searchUrl) {
        openBrowser(searchUrl, browser);
        msg = 'opened ' + browser;
    }
    res.writeHead(200);
    res.end('opensafari: ' + msg);
};

const server = http.createServer(requestListener);
console.log('Listening on http://localhost:' + config.port);
server.listen(config.port);