const home = require('os').homedir();

module.exports = {
    port: 3015,
    appTitle: 'open safari',
    browsers: {
        safari: 'Safari.app',
        firefox: 'Firefox.app',
        edge: 'Microsoft Edge.app'
    },
    aboregie: {
        jar: home + '/Dev/java/javafx/AboRegieFx2/out/artifacts/AboRegieFx2/archive.jar',
        java: '/Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home/bin/java'
    }
};