//var express = require('express');
import express from 'express' ;

const apiRouter = express.Router();

var name;

// http://localhost:8282/name' en mode post
apiRouter.route('/name')
.post( function(req , res , next ) {
    name = req.body;
    res.send(name);
});

// exemple URL: http://localhost:8282/connectedName
apiRouter.route('/connectedName')
.get( function(req , res , next ) {
    res.send(name);
});