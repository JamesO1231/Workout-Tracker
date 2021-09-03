const path = require('path');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.redirect(path.join(__dirname, '../public/index'));
    });
    app.get('/exercise', function(req, res) {
        res.redirect(path.join(__dirname, '../public/exercise'));
    });
    app.get('/stats', function(req, res) {
        res.redirect(path.join(__dirname, '../public/stats'));
    });
};