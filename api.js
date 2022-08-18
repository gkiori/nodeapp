//var express = require('express');
import express from 'express' ;

const apiRouter = express.Router();

let name;
let nameTemp = {"name" : ""};

// http://localhost:8282/api-node/name' en mode post
apiRouter.route('/api-node/name')
.post( function(req , res , next ) {
    name = req.body.name;
    console.log(name);
    res.send("<h2>Bonjour " + name + " ... Vous êtes bien matinal </h2>");
    //nameTemp.name = name;
    //res.send(name);
});

/*
// exemple URL: http://localhost:8282/api-node/connectedName
apiRouter.route('/api-node/connectedName')
.get( function(req , res , next ) {
    res.send(nameTemp);
});
*/

export default { apiRouter };