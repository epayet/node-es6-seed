var jasmine = require('jasmine-node');
jasmine.run({
    specFolders: ['./acceptance'],
    watchFolders: [],
    isVerbose: true,
    showColors: true
});

//Or in command line: jasmine-node test/ --watch --autotest --color
