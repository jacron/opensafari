const http = require('http');
const { exec } = require('child_process');
const config = require('../config');

const browsers = {
    safari: 'Safari.app',
    firefox: 'Firefox.app'
};

function openSafari(url, browser) {
    if (!browser) { browser = 'safari'; }
    const cmd = `open -a ${browsers[browser]} ${url}`;
    exec(cmd, err => {
        if (err) {
            console.error(err);
        }
    })
}

const requestListener = function (req, res) {
    const url = new URL(req.url, 'http://' + req.headers.host);
    const params = url.searchParams;
    const searchUrl = params.get('url');
    if (searchUrl) {
        openSafari(searchUrl, params.get('browser'));
    }
    res.writeHead(200);
    res.end('safari was opened');
};

const server = http.createServer(requestListener);
server.listen(config.port);