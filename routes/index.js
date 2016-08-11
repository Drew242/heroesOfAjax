var heroCtrl = require('./heroes');
var hqCtrl   = require('./hqs');
// var otherCtrl = require('./other');

module.exports = (app) => {

    // Routes go here

    // Hero Routes
    app.get('/api/heroes', heroCtrl.get);
    app.post('/api/heroes', heroCtrl.upsert);

    // HQ Routes
    app.get('/api/hqs', hqCtrl.get);
    app.get('/api/hqs/:id', hqCtrl.get);
    app.post('/api/hqs', hqCtrl.upsert);
    app.post('/api/hqs/:id', hqCtrl.upsert);


}
