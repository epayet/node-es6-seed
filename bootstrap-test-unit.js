var traceur = require('traceur');
traceur.require.makeDefault(function(file) {
    return file.indexOf('node_modules') == -1;
});

require('./test-unit');