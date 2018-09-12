//Adding route to the webservice
module.exports = (app) => {
    const block = require('../controllers/block.controller');

    // Retrieve all Notes
    app.get('/block/:blockID', block.find);
    app.post('/block', block.create)

}