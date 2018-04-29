const path = require('path');

module.exports = {
    entry : './public/javascripts/eventHandler.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'public/javascripts'),
    },
};  