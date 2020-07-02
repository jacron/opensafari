const { exec } = require('child_process');
const config = require('../config');

function getHost(url) {
    url = url.replace(/http[s]?:\/\//, '');
    return url.split('/')[0];
}

function openTheJar(url) {
    const host = getHost(url);
    const cmd = `${config.aboregie.java} -jar ${config.aboregie.jar} ${host}`;
    exec(cmd, err => {
        if (err) {console.error(err);}
    })
}

module.exports = openTheJar;