const { exec } = require('child_process');

function getHost(url) {
    url = url.replace(/http[s]?:\/\//, '');
    return url.split('/')[0];
}

function openTheJar(url) {
    const java8 = '/Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home/bin/java';
    const theJar = '/Users/orion/appdocs/AboRegieFx2/out/artifacts/AboRegieFx2/AboRegieFx2.jar';
    // const cmd = `open -a 'Jar Launcher.app' ${theJar} --args ${url}`;
    const host = getHost(url);
    const cmd = `${java8} -jar ${theJar} ${host}`;
    // const cmd = `open -a 'AboRegie.app' --args ${host}`;
    exec(cmd, err => {
        if (err) {console.error(err);}
    })
}

module.exports = openTheJar;