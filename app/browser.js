const { exec } = require('child_process');
const config = require('../config');

function openBrowser(url, browser) {
    if (!browser) { browser = 'safari'; }
    const cmd = `open -a '${config.browsers[browser]}' ${url}`;
    exec(cmd, err => {
        if (err) {console.error(err);}
    })
}

module.exports = openBrowser;