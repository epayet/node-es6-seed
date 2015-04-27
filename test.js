var jasmine = require('jasmine-node');
jasmine.run({
    specFolders: ['./app/api'],
    watchFolders: [],
    isVerbose: true,
    showColors: true
});

//Or in command line: jasmine-node test/ --watch --autotest --color