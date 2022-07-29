//var express = require('express');
import express from 'express' ;

const apiRouter = express.Router();

let name = "";

// http://localhost:8282/api-node/name' en mode post
apiRouter.route('/api-node/name')
.post( function(req , res , next ) {
    name = req.body;
    console.log(name);
    res.send(name);
});

// exemple URL: http://localhost:8282/api-node/connectedName
apiRouter.route('/api-node/connectedName')
.get( function(req , res , next ) {
    res.send(name);
});

export default { apiRouter };