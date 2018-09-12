// Retrieve and return all notes from the database.

const blockchain = require('../public/javascripts/simpleChain');
//Sepratin the block definition from simple.js
const block = require('../public/javascripts/block');


exports.find = (req, res) => {
    height = req.params.blockID;
    blockchain.getBlock(height).then(function (response) {
        // console.log("====================================================",response);
        res.send(response)
    });
};

/*
 * @Post Method to add the Block
 * */

exports.create = (req, res) => {

    blockchain.addBlockData(block).then(function (response) {

        res.setHeader('Content-Type', 'application/json');
        res.send(response)
        //res.send(JSON.stringify(response))
    })

}